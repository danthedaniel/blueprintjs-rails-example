# blueprintjs-rails-example
---

An example rails project that is configured to use blueprintjs, react,
react-router, and es6 (es2015).

### Installation

First, install ruby (2.3.3 was used in this project, but anything supporting
Rails 5 will be fine), node, and the bundler gem.

Then install the dependencies:

```shell
bundler install
npm install
```

### Configuration changes

#### Routing

In [config/routes.rb](config/routes.rb), constraints have been placed on different
route types, such that all HTML requests are piped to the index method in
the [ApplicationController](app/controllers/application_controller.rb). The path,
however, is maintained so that `react-router` can do the actual routing. For
RESTful endpoints, there is another constraint that filters all JSON requests.

```ruby
# config/routes.rb
Rails.application.routes.draw do
  constraints(lambda { |req| req.format == :html }) do
    root 'application#index'
    get '*path', to: 'application#index'
  end

  constraints(name: /.+/, ext: /(jpg|png|gif|eot|ttf|woff|json)/) do
    # redirect for blueprintjs resources
    get '/resources/:name', to: redirect('/assets/%{name}')
  end

  constraints(lambda { |req| req.format == :json }) do
    # Put routes for RESTful endpoints here
  end
end
```

#### Assets

A few paths from node_modules were added to config/initializers/assets.rb to
allow for blueprint's styles and icons to be used in the asset pipeline.

```ruby
Rails.application.config.assets.paths << "#{Rails.root}/node_modules/@blueprintjs/core/dist/"
Rails.application.config.assets.paths << "#{Rails.root}/node_modules/@blueprintjs/core/resources/"
```

### What you'll need to do

There is no authentication included with this example. One solution I've found
is to send the session cookie to the client during login, which the React app
then stores in a cookie. That token is then sent with every authenticated AJAX
request.

Also make sure to request all AJAX paths as `*.json`, or with header
specifying the desired content type as JSON. This make certain that rails routes
the requests correctly given the custom constraints.

All of your connections to/from the server will be taking place through AJAX
requests once you're past the initial app download. I think this is a nice
division of responsibilities, treating the front-end as a completely separate
entity from the actual Rails site.
