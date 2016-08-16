package qurananalyzer.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/")
public class HomeController {

    @RequestMapping()
    public String index() {
        return "Welcome to Quran Analyzer ...";
    }
}
