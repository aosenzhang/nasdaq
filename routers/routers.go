package routers

import (
	"github.com/gorilla/mux"
	"nasdaq/controllers"
)

func Register() *mux.Router {
	// Routes consist of a path and a handler function.
	r := mux.NewRouter()
	// Bind to a port and pass our router in
	r.HandleFunc("/", controllers.IndexHandler)
	return r
}
