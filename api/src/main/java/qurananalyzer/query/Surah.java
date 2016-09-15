package qurananalyzer.query;


import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "quran", type = "surah")
public class Surah {
		
	@Id
	private String id;
	
	private String surahEnglishName;
	
	private String surahArabicName;

	private int surahNumber;
	

	public String getSurahEnglishName() {
		return surahEnglishName;
	}

	public void setSurahEnglishName(String surahEnglishName) {
		this.surahEnglishName = surahEnglishName;
	}

	public String getSurahArabicName() {
		return surahArabicName;
	}

	public void setSurahArabicName(String surahArabicName) {
		this.surahArabicName = surahArabicName;
	}

	public int getSurahNumber() {
		return surahNumber;
	}

	public void setSurahNumber(int surahNumber) {
		this.surahNumber = surahNumber;
	}
}