package controllers

import (
	"nasdaq/kernel"
	"net/http"
)

type JoinHandler struct {
	kernel.W
}

func (self *JoinHandler) Get(w http.ResponseWriter, r *http.Request, g kernel.G) {
	t, err := self.LoadTemplate(
		"template/join.html",
		"template/header_nologin.html",
		"template/footer.html")
	if err != nil {
		panic(err.Error())
	}
	t.ExecuteTemplate(w, "join", nil)
}
