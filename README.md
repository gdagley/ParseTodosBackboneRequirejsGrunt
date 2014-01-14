# Parse Todo JS Example Using RequireJS

As an exercise to learn too many things all at once, I took the Parse Todos example app and converted to use RequireJS.  The application structure was generated using [Yeoman](http://yeoman.io/) and the [generator-backbone](https://github.com/yeoman/generator-backbone).  I included the RequireJS to break the example in to more managable pieces for me to learn and understand.  I also included the Twitter Bootstrap CSS option because I wanted to see how that worked with everything, hence the need for Ruby and the Bundler gem to install [compass](http://compass-style.org/)


## Original README

This is a sample application that showcases the [Parse JavaScript SDK](https://www.parse.com/docs/js_guide). It's based on the [canonical Backbone Todo app](http://addyosmani.github.com/todomvc/).

[View the live application hosted on Parse here](http://todolist.parseapp.com).

[Learn how we built it in the tutorial](https://parse.com/tutorials/todo-app-with-javascript).

## Getting Started

    git clone git@github.com:gdagley/ParseTodosBackboneRequirejsGrunt.git
    cd ParseTodosBackboneRequirejsGrunt
    gem install bundler
    bundle install
    npm install -g yo
    bower install
    grunt server

Open your browswer (grunt may have done it for you) to [http://localhost:9000](http://localhost:9000)
