package controllers

import (
	"log"
	"nasdaq/kernel"
	"net/http"
)

type IndexHandler struct {
	kernel.W
}

func (self *IndexHandler) Prepare(w http.ResponseWriter, r *http.Request, g kernel.G) {
	log.Println("success")
}

func (self *IndexHandler) Get(w http.ResponseWriter, r *http.Request, g kernel.G) {
	t, err := self.LoadTemplate(
		"template/index_nologin.html",
		"template/header_nologin.html",
		"template/footer.html")
	if err != nil {
		panic(err.Error())
	}
	t.ExecuteTemplate(w, "index_nologin", nil)
}
