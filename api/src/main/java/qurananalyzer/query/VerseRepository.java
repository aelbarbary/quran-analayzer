package qurananalyzer.query;

import org.elasticsearch.search.suggest.Suggest.Suggestion.Sort;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.repository.CrudRepository;

public interface VerseRepository extends CrudRepository<Verse, String> {
	
	@Query("{\"match\": {\"surahNumber\": \"?0\"}}")
	Iterable<Verse> findBySurahNumber(String surahNumber);	

	@Query("{\"match\": { \"verse\" : {\"query\" : \"?0\"}}}")
	Page<Verse> searchByTerm(String searchterm, Pageable pageable);	

}
