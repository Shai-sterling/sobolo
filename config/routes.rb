Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



    resources :tours
    root "tours#new"

    get "/discover", to: "discover#ghana"

end
