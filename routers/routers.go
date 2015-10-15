package routers

import (
	"github.com/gorilla/mux"
	"nasdaq/controllers"
)

func Register() *mux.Router {
	// Routes consist of a path and a handler function.
	r := mux.NewRouter()
	// Bind to a port and pass our router in
	//r.HandleFunc("/", new(controllers.IndexHandler).Web.Go)
	r.HandleFunc("/", new(controllers.IndexHandler).Get).Methods("Get")
	return r
}
