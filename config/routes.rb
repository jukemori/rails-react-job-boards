Rails.application.routes.draw do
  root to: redirect('/jobs')

  get 'jobs', to: 'site#index'
  get 'jobs/new', to: 'site#index'
  get 'jobs/:id', to: 'site#index'
  get 'jobs/:id/edit', to: 'site#index'
  namespace :api do
    resources :boards, only: %i[index show create destroy update] do
      resources :jobs, only: %i[index show create destroy update]
    end
  end

end
