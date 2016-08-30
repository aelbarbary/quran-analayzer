package qurananalyzer.controllers;

import org.springframework.web.bind.annotation.RestController;

import qurananalyzer.query.Verse;
import qurananalyzer.query.VerseRepository;

import org.elasticsearch.search.suggest.Suggest.Suggestion.Sort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/quran")
public class QuranController {
	
	@Autowired
	private VerseRepository verseRepository;
	
    @RequestMapping()
    public String index() {
        return "should return all verses";
        //http://192.168.99.100:32769/_search?
    }
    
    @RequestMapping("/search/{searchTerm}")
    public Page<Verse> search(@PathVariable("searchTerm") String searchTerm, Pageable pageable) {
    	if (searchTerm.charAt(0) == 'h' && searchTerm.charAt(0) == 'h')
    	{
    		return verseRepository.searchByTerm(searchTerm, pageable);
    	}
    	else 
    	{
    		return verseRepository.searchByTerm(searchTerm, pageable);
    	}
    } 

}
