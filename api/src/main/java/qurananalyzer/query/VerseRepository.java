package qurananalyzer.query;

import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.repository.CrudRepository;

public interface VerseRepository extends CrudRepository<Verse, String> {
	
	@Query("{\"match\": {\"surahNumber\": \"?0\"}}")
	Iterable<Verse> findBySurahNumber(String surahNumber);	

}
