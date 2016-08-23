package qurananalyzer.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/quran")
public class QuranController {

    @RequestMapping()
    public String index() {
        return "should return all verses";
        //http://192.168.99.100:32769/_search?
    }

    

}
