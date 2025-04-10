"""basic Flask app - demo of using a variable in a route"""
from flask import Flask
from routes import init_routes

app = Flask(__name__)
init_routes(app)

if __name__ == '__main__':
    app.run(debug=True)
    # app.run(host='0.0.0.0', port=4999, debug=True)

# if you need to avoid using port 5000 - some Mac users -
# delete the first app.run() line above and
# un-comment the second app.run() line. Then use localhost:4999

