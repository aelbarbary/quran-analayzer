package qurananalyzer.controllers;

import org.springframework.web.bind.annotation.RestController;

import qurananalyzer.query.QueryFactory;
import qurananalyzer.query.Verse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/quran")
public class QuranController {
	
	@Autowired
	private QueryFactory queryFactory;
	
    @RequestMapping()
    public String index() {
        return "should return all verses";
    }
    
    @RequestMapping("/search/{searchTerm}")
    public Page<Verse> search(@PathVariable("searchTerm") String searchTerm, Pageable pageable) {
    	
    	return queryFactory.getResults(searchTerm, pageable);
    } 

}
