package controllers

import (
	"html/template"
	"nasdaq/kernel"
	"net/http"
)

type IndexHandler struct {
	kernel.Web
}

func (self *IndexHandler) Get(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("template/index_nologin.html")
	if err != nil {
		panic(err.Error())
	}
	t.Execute(w, nil)
}
