
from flask import Flask, render_template
import feedparser

app = Flask(__name__)

RSS_FEED_URL = "https://static.cricinfo.com/rss/livescores.xml"

@app.route('/')
def index():
    feed = feedparser.parse(RSS_FEED_URL)
    scores = []
    for entry in feed.entries:
        scores.append({"title": entry.title, "link": entry.link})
    return render_template('index.html', scores=scores)

if __name__ == '__main__':
    app.run(debug=True)
