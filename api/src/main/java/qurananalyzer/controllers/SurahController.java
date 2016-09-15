package qurananalyzer.controllers;

import org.springframework.web.bind.annotation.RestController;

import qurananalyzer.query.Surah;
import qurananalyzer.query.SurahRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/quran/surah")
public class SurahController {

	@Autowired
	private SurahRepository surahRepository;
	
    @RequestMapping()
    public Page<Surah> index(Pageable pageable) {
        return surahRepository.getAll(pageable);
    }
}
