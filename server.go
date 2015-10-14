package main

import (
	"nasdaq/routers"
	"net/http"
)

func main() {
	http.ListenAndServe(":2018", routers.Register())
}
