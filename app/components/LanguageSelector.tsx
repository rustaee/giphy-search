'use client';

interface LanguageSelectorProps {
    onLanguageChange: (lang: string) => void;
    lang: string;
}
export default function LanguageSelector({ onLanguageChange, lang }: LanguageSelectorProps) {
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onLanguageChange(e.target.value);
    };

    return (
        <select value={lang} onChange={handleLanguageChange} className="language-select">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="ja">Japanese</option>
            <option value="zh">Chinese</option>
        </select>
    );
}