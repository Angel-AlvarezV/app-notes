Rails.application.routes.draw do
  # Define las rutas manualmente para que estén en la raíz
  root "notes#index"
  get "/new", to: "notes#new", as: :new_note
  get "/:id", to: "notes#show", as: :note
  get "/:id/edit", to: "notes#edit", as: :edit_note
  patch "/:id", to: "notes#update"
  delete "/:id", to: "notes#destroy"
  post "/", to: "notes#create", as: :notes
end
