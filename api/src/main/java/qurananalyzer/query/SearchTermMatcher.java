package qurananalyzer.query;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Component;

@Component
public class SearchTermMatcher {
	public SearchType getSearchType(String searchTerm)
	{
		Pattern exactSearchWholeQuranPattern = Pattern.compile("^\"[a-zA-Z ]*\"");
		Pattern getVersesOfOneSurahPattern = Pattern.compile("^\\bsurah:\\b[0-9]*");
		Pattern searchInOneSurahPattern = Pattern.compile("^\\bsurah:\\b[1-9]* [a-zA-Z ]*");
		Pattern exactSearchInOneSurahPattern = Pattern.compile("^\\bsurah:\\b[1-9]* \"[a-zA-Z ]*\"");
		
		Matcher exactSearchWholeQuranMatcher = exactSearchWholeQuranPattern.matcher(searchTerm);
		Matcher getVersesOfOneSurahMatcher = getVersesOfOneSurahPattern.matcher(searchTerm);
		Matcher searchInOneSurahMatcher = searchInOneSurahPattern.matcher(searchTerm);
		Matcher surahExactMatcher = exactSearchInOneSurahPattern.matcher(searchTerm);
		
		if (surahExactMatcher.matches()){
			return SearchType.SurahExactMatch;
		}
		else if (searchInOneSurahMatcher.matches()){
			return SearchType.SurahMatch;
		}
		else if (getVersesOfOneSurahMatcher.matches()){
			return SearchType.Surah;
		}
		else if (exactSearchWholeQuranMatcher.matches()){
			return SearchType.QuranExactMatch;
		}
		else{
			return SearchType.QuranMatch;
		}
	}
}



