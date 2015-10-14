package controllers

import (
	"html/template"
	"net/http"
)

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("template/index_nologin.html")
	if err != nil {
		panic(err.Error())
	}
	t.Execute(w, nil)
}
