Rails.application.routes.draw do
  get 'site/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :boards, only: %i[index show create destroy update] do
      resources :jobs, only: %i[index show create destroy update]
    end
  end
  # Defines the root path route ("/")
  # root "articles#index"
end
