import { Commitment } from "@solana/web3.js";
import * as sb from "@switchboard-xyz/on-demand";

const FEED = "EKfd483tGtmrrnCJGLA2S2Tu2HvpiA4wgWgV2XGydC5p"; // weather
// const FEED = "9KMAMN5HN4cP1jrKkqhXQDRw9XxbG7Rz9JzwT511Kkx1"; // election
// const FEED = "5FFsFn5b4p83bYFRkXWCnPgaGPUhPtqcAabrU7q6h9Rz"; // coinflip

const TX_CONFIG = {
	commitment: "processed" as Commitment,
	skipPreflight: true,
	maxRetries: 0,
};

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

(async function main() {
	const { keypair, connection, program } = await sb.AnchorUtils.loadEnv();
	const feedAccount = new sb.PullFeed(program!, FEED);
	console.log("feed acc:", feedAccount.pubkey.toBase58());

	while (true) {
		const [pullIx, responses, _ok, luts] = await feedAccount.fetchUpdateIx({
			numSignatures: 2,
		});

		const tx = await sb.asV0Tx({
			connection,
			ixs: [...pullIx!],
			signers: [keypair],
			computeUnitPrice: 200_000,
			computeUnitLimitMultiple: 1.3,
			lookupTables: luts,
		});

		const sim = await connection.simulateTransaction(tx, TX_CONFIG);
		const updateEvent = new sb.PullFeedValueEvent(
			sb.AnchorUtils.loggedEvents(program!, sim.value.logs!)[0]
		).toRows();
		console.log("Submitted Price Updates:\n", updateEvent);
		console.log("Value: ", updateEvent[0].value);

		await sleep(3000);
	}
})();


