package controllers

import (
	"nasdaq/kernel"
	"net/http"
)

type LoginHandler struct {
	kernel.W
}

func (self *LoginHandler) Get(w http.ResponseWriter, r *http.Request, g kernel.G) {
	t, err := self.LoadTemplate(
		"template/login.html",
		"template/header_nologin.html",
		"template/footer.html")
	if err != nil {
		panic(err.Error())
	}
	t.ExecuteTemplate(w, "login", nil)
}
