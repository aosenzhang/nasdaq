package main

import (
	"nasdaq/routers"
	"net/http"
)

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	http.Handle("/", routers.Register())
	http.ListenAndServe(":80", nil)
}
