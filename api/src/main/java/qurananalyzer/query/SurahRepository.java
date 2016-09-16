package qurananalyzer.query;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

@Component
public interface SurahRepository extends CrudRepository<Surah, String> {
	
	@Query("{\"match_all\": {}}")
	Page<Surah> getAll(Pageable pageable);
	
	Surah findBySurahNumber(int surahNumber);
	
	@Query("{ \"bool\" : { \"should\" : [ { \"match\" : { \"surahArabicName\" : \"?0\" } }, { \"match\": { \"surahEnglishName\": \"?0\" } } ] } }")
	Page<Surah> findByName(String surahName, Pageable pageable);
}
