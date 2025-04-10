Skip this step if you want the oracle to fetch data from real website.

Otherwise, follow the steps to create a sample HTTPS server, which requires:
- HTTPS, not HTTP
- Using domain, not IP
- Valid certificate that matches the domain


## Steps:

1. Register an account on: https://www.pythonanywhere.com (it provides a certificate)
2. Click "Web":

![image](https://github.com/user-attachments/assets/acd7c6bf-b99e-4946-ae53-ae730cb01bcb)

3. Add a new web app:

![image](https://github.com/user-attachments/assets/f8704945-d20d-4953-8514-1d1e6254cfdf)

4. Choose Flask:

![image](https://github.com/user-attachments/assets/8aa654e6-1f97-495f-8a9a-bfc8efe33b2a)

5. Choose python version:

![image](https://github.com/user-attachments/assets/347466a5-ae37-4954-be32-948201906ace)

6. "Next" to complete creating the web app.

7. Scroll down, go to the source code dir:

![image](https://github.com/user-attachments/assets/2d46a7c6-7350-4d7c-b4eb-33fdf2d26ca2)

8. Click the source file:

![image](https://github.com/user-attachments/assets/c188a2ca-2f65-4622-b58c-55b181daaf8a)

9. Replace the content with following code and save:
```python
# app.py
from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/')
def default():
    return jsonify({"number": 1})

@app.route('/weather')
def weather():
    return jsonify({"number": random.randint(20, 25)})

@app.route('/election')
def election():
    return jsonify({"number": random.randint(1_000_000, 1_001_000)})

@app.route('/coinflip')
def coinflip():
    return jsonify({"number": random.randint(0, 1)})

if __name__ == '__main__':
    app.run()
```

10. Go back to Web tab, reload it:

![image](https://github.com/user-attachments/assets/f7073dda-67f1-4b39-b400-2f84716dd296)


## Explanation:
It will create a HTTPS server at: https://YOUR_NAME.pythonanywhere.com
The code supports 3 path:
- https://YOUR_NAME.pythonanywhere.com/weather, it will return a random number between 20~25.
- https://aj3423.pythonanywhere.com/election, it returns 1,000,000~1,001,000.
- https://aj3423.pythonanywhere.com/coinflip, it returns either 0 or 1.
