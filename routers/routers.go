package routers

import (
	"github.com/gorilla/mux"
	"log"
	"nasdaq/controllers"
	"nasdaq/kernel"
)

func Register(g *kernel.G) *mux.Router {
	// Routes consist of a path and a handler function.
	r := mux.NewRouter()
	// Bind to a port and pass our router in
	r.HandleFunc("/", g.Go(&controllers.IndexHandler{}))
	log.Println(&controllers.IndexHandler{})
	r.HandleFunc("/login", g.Go(&controllers.LoginHandler{}))
	r.HandleFunc("/join", g.Go(&controllers.JoinHandler{}))
	return r
}
