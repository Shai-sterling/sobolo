Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html



    resources :tours do 
      resources :sites
    end





    root "tours#index"

    get "/discover", to: "discover#ghana"

end
