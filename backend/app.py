from flask import Flask, json, jsonify

app = Flask(__name__)


@app.route('/api/data')
def get_data():
    with open('output.json', 'r') as json_file:
        data = json.load(json_file)
    return jsonify(data)


if __name__ == '__main__':
    app.run()
