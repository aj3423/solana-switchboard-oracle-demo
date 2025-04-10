1. Goto https://ondemand.switchboard.xyz/solana/devnet/, connect your wallet
2. Click "Build custom"

  ![image](https://github.com/user-attachments/assets/938cd9ff-5f97-4084-b3c6-89478183cd11)

3. Build a new job

  ![image](https://github.com/user-attachments/assets/8744d007-3dce-4283-85fd-b89858720a12)

4. Drag the "Fetch -> HttpTask" to the drop area:

  ![image](https://github.com/user-attachments/assets/9848cdb8-06ec-40a9-b8f0-76db3b7758bd)

5. Flll the url with the data source URL:

  ![image](https://github.com/user-attachments/assets/145af74e-5969-4758-9ad7-0ab5b60adcef)

6. Drag the "Parse -> JsonPathTask" to it:

  ![image](https://github.com/user-attachments/assets/663e4bbd-e377-4e4a-9e57-d3031e36473e)

7. Fill the path with `$.number`, because the http request will return a json like: `{ "number": 20 }`

  ![image](https://github.com/user-attachments/assets/ed674910-6299-49ec-803b-656cbdd532d2)

8. Save
9. Fill in the oracle "Name", and "Simulate" to see if it works. Then create account.

  ![image](https://github.com/user-attachments/assets/02d5c69b-c2d4-4556-99bf-297ed6e78fdd)

10. Copy this feed program address to the source code

![image](https://github.com/user-attachments/assets/be4226d3-3490-479a-ad0f-0505a05b5898)

https://github.com/aj3423/solana-switchboard-oracle-demo/blob/6e8236b81150c1d6179ddc86918c2058165124e3/sb-on-demand-feeds/scripts/runFeed.ts#L4-L6
