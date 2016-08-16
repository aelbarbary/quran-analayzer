package qurananalyzer.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import qurananalyzer.query.Verse;
import qurananalyzer.query.VerseRepository;

@RestController
@RequestMapping("/quran/surah")
public class SurahController {
	
	@Autowired
	private VerseRepository verseRepository;
	
	@RequestMapping("/{id}")
    public Iterable<Verse> forSurah(String surahNumber) {
        return verseRepository.findBySurahNumber(surahNumber);
    }
}
