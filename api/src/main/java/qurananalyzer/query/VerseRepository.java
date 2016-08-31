package qurananalyzer.query;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.repository.CrudRepository;

public interface VerseRepository extends CrudRepository<Verse, String> {
	
	@Query("{\"match\": { \"verse\" : {\"query\" : \"?0\"}}}")
	Page<Verse> search(String searchterm, Pageable pageable);	
	
	@Query("{\"match_phrase\": { \"verse\" :  \"?0\"}}")
	Page<Verse> exactSearch(String searchterm, Pageable pageable);
	
	@Query("{ \"bool\" : { \"must\" : [{ \"term\" : { \"surahNumber\" : ?0 } }, { \"match\": { \"verse\": \"?1\" } } ] } }")
	Page<Verse> search(int surahNumber, String searchterm, Pageable pageable);	
	
	@Query("{ \"bool\" : { \"must\" : [{ \"term\" : { \"surahNumber\" : ?0 } }, { \"match_phrase\": { \"verse\": \"?1\" } } ] } }")
	Page<Verse> exactSearch(int surahNumber, String searchterm, Pageable pageable);
	
	@Query("{\"match\": { \"surahNumber\" :  \"?0\"}}")
	Page<Verse> getSurah(int surahNumber, Pageable pageable);
	
	@Query("{ \"bool\" : { \"must\" : { \"term\" : { \"surahNumber\" : ?0 } }, \"filter\": { \"term\" : { \"verse\" : \"?1\" } } }")
	Page<Verse> surahSearch(String surah, String term, Pageable pageable);	

}
