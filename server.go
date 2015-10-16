package main

import (
	"log"
	"nasdaq/kernel"
	"nasdaq/routers"
	"net/http"
)

func initHandler(w http.ResponseWriter, r *http.Request, g kernel.G) {
	log.Printf("%s %s ip: %s start handler", r.Method, r.URL, r.RemoteAddr)
}

func endHandler(w http.ResponseWriter, r *http.Request, g kernel.G) {
	log.Printf("%s %s ip: %s end handler", r.Method, r.URL, r.RemoteAddr)
}

func defaultHandler(w http.ResponseWriter, r *http.Request, g kernel.G) {
}

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	g := kernel.G{
		//可以处理的http方法字典
		Ml: map[string]string{
			"GET":     "Get",
			"POST":    "Post",
			"OPTIONS": "Options",
			"HEAD":    "Head",
			"PUT":     "Put",
			"DELETE":  "Delete",
			"CONNECT": "Connect",
		},
		Init:           initHandler,
		DefaultHandler: defaultHandler,
		End:            endHandler,
	}
	http.Handle("/", routers.Register(&g))
	log.Printf("server run")
	http.ListenAndServe(":2018", nil)
}
