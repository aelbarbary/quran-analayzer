package qurananalyzer.query;

import org.springframework.data.repository.CrudRepository;

public interface VerseRepository extends CrudRepository<Verse, String> {
	Iterable<Verse> findBySurahNumber(String surahNumber);
}
