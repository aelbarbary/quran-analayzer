package qurananalyzer.controllers;

import org.springframework.web.bind.annotation.RestController;

import qurananalyzer.query.Surah;
import qurananalyzer.query.SurahRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/quran/surah")
public class SurahController {

	@Autowired
	private SurahRepository surahRepository;
	
    @RequestMapping()
    public Page<Surah> getAll(Pageable pageable) {
        return surahRepository.getAll(pageable);
    }
    
    @RequestMapping("/{surahNumber}")
    public Surah findByNumber(@PathVariable("surahNumber") int surahNumber) {
        return surahRepository.findBySurahNumber(surahNumber);
    }
    
    @RequestMapping("/search/{surahName}")
    public Page<Surah> findByName(@PathVariable("surahName") String surahName, Pageable pageable) {
        return surahRepository.findByName(surahName, pageable);
    }
    
}
