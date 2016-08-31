package qurananalyzer.query;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

@Component
public class QueryFactory {
	@Autowired
	private VerseRepository verseRepository;
	
	@Autowired
	private SearchTermMatcher searchTermMatcher;
	
	public Page<Verse> getResults(String searchTerm, Pageable pageable)
	{
		SearchType searchType = searchTermMatcher.getSearchType(searchTerm);
		
		if (searchType == SearchType.SurahExactMatch)
    	{
			String[] parts = searchTerm.split(" ");
    		
    		String[] parts2 = parts[0].split(":");
    		int surahNumber = Integer.parseInt(parts2[1]);
    		
			String term = String.join(" ", Arrays.copyOfRange(parts, 1, parts.length)).replaceAll("\"", ""); 
    		return verseRepository.exactSearch(surahNumber, term, pageable);
    	}
    	else if (searchType == SearchType.SurahMatch)
    	{
    		String[] parts = searchTerm.split(" ");
    		
    		String[] parts2 = parts[0].split(":");
    		int surahNumber = Integer.parseInt(parts2[1]);
    		
			String term = String.join(" ", Arrays.copyOfRange(parts, 1, parts.length)); 
    		return verseRepository.search(surahNumber, term, pageable);
    	}
    	else if (searchType == SearchType.Surah)
    	{ 
    		Sort sort = new Sort(Sort.Direction.ASC, "verseNumber");
    		PageRequest pr = new PageRequest(pageable.getPageNumber(), pageable.getPageSize(), sort);
    		String[] parts = searchTerm.split(":");
    		int surahNumber = Integer.parseInt(parts[1]);
    		return verseRepository.getSurah(surahNumber, pr);
    	}
    	else if (searchType == SearchType.QuranExactMatch)
    	{
    		String term= searchTerm.replaceAll("\"", "");
    		return verseRepository.exactSearch(term, pageable);
    	}
    	else 
    	{
    		return verseRepository.search(searchTerm, pageable);
    	}	
	}
}
