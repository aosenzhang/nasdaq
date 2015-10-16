package kernel

import (
	"html/template"
	"log"
	"net/http"
	"reflect"
)

type G struct {
	Ml map[string]string
	//全局都会运行的函数，用于用户验证，加载模版等全局操作
	Init func(http.ResponseWriter, *http.Request, G)
	//如果没有对应的处理方法，由defaultHandler处理
	DefaultHandler func(http.ResponseWriter, *http.Request, G)
	//结束请求后的收尾工作
	End func(http.ResponseWriter, *http.Request, G)
}

func (self *G) Go(handler interface{}) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		self.Init(w, r, *self)
		params := []reflect.Value{reflect.ValueOf(w), reflect.ValueOf(r), reflect.ValueOf(*self)}
		//无论什么方法 都预先调用prepare函数
		prepare := reflect.ValueOf(handler).MethodByName("Prepare")
		if prepare.IsValid() {
			prepare.Call(params)
			log.Println("start run prepare")
		}
		fn, ok := self.Ml[r.Method]
		if ok {
			f := reflect.ValueOf(handler).MethodByName(fn)
			if f.IsValid() {
				log.Printf("start run %s", fn)
				f.Call(params)
			} else {
				log.Printf("not %s method", fn)
			}
		} else {
			self.DefaultHandler(w, r, *self)
		}
		//无论什么方法 结束后都调用finish方法
		finish := reflect.ValueOf(handler).MethodByName("Finish")
		if finish.IsValid() {
			log.Println("start run finish")
			finish.Call(params)
		}
		self.End(w, r, *self)
	}
}

type W struct {
}

func (self *W) LoadTemplate(s ...string) (*template.Template, error) {
	return template.ParseFiles(s...)
}
