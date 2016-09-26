package qurananalyzer.query;


import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "quran", type = "verse")
public class Verse {
		
	@Id
	private String id;
	
	private String surahEnglishName;
	
	private String surahArabicName;

	private String verseNumber;
	
	private String surahNumber;

	private String verse;
	
	private String arabicVerse;
	
	public String getVerse() {
		return this.verse;
	}

	public void setVerse(String verse) {
		this.verse = verse;
	}

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

	public String getVerseNumber() {
		return verseNumber;
	}

	public void setVerseNumber(String verseNumber) {
		this.verseNumber = verseNumber;
	}

	public String getSurahNumber() {
		return surahNumber;
	}

	public void setSurahNumber(String surahNumber) {
		this.surahNumber = surahNumber;
	}

	public String getArabicVerse() {
		return arabicVerse;
	}

	public void setArabicVerse(String arabicVerse) {
		this.arabicVerse = arabicVerse;
	}
}