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
