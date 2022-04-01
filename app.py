import flask

app = flask.Flask(__name__)

# set up a separate route to serve the index.html file generated
# by create-react-app/npm run build.
# By doing this, we make it so you can paste in all your old app routes
# from Milestone 2 without interfering with the functionality here.
bp = flask.Blueprint(
    "bp",
    __name__,
    template_folder="./static/react",
)

# route for serving React page
@bp.route("/home")
def index():
    # NB: DO NOT add an "index.html" file in your normal templates folder
    # Flask will stop serving this React page correctly
    return flask.render_template("index.html")

app.register_blueprint(bp)


@app.route("/")
def index():
    
    return flask.redirect(flask.url_for("login"))

@app.route("/login")
def login():

    return flask.render_template("login.html")

@app.route("/signup")
def signup():

    return flask.render_template("signup.html")

app.run(debug=True)
