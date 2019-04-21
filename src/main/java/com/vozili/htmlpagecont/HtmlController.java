package com.vozili.htmlpagecont;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HtmlController {

    @RequestMapping(value = {"/", "/index"}, method = RequestMethod.GET)
    public String hello(Model model) {
        return "Sign_in";
    }

    @RequestMapping(value = {"/main"}, method = RequestMethod.GET)
    public String orders(Model model) {
        return "Orders";
    }

    @RequestMapping(value = {"/main/create"}, method = RequestMethod.GET)
    public String ordersCreate(Model model) {
        return "CreateOrder";
    }
}
