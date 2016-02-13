from flask import Flask


app = Flask('15thnight')

@app.route('/')
def index():
    return 'web app'

@app.route('/health')
def health():
    return ''


if __name__ == '__main__':
    app.run()