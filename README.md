# Dínóvölgy

Montessori-szerű számolós iPad-játék dínókkal: tojásszámlálás, összeadás (Bogyólakoma) és sorba rendezés (Kőösvény). Minden befejezett kör egy tojást ér, három tojásból kikel egy új dínó.

Az app egyetlen statikus weboldal. Nincs szükség szerverre, fiókra vagy telepítésre, és az első betöltés után internet nélkül is működik.

## Feltöltés GitHub Pagesre

1. A GitHubon hozz létre egy új, **Public** repót, például `dinovolgy` néven.
2. A repó oldalán kattints az **uploading an existing file** linkre (vagy az **Add file → Upload files** menüre).
3. Csomagold ki a zipet, jelöld ki **az összes fájlt** (13 darab), és húzd be őket. Gépen a behúzás, iPaden a *choose your files* gomb a kényelmesebb. Nincs almappa, minden fájl a repó gyökerébe kerül.
4. Kattints a **Commit changes** gombra.
5. Nyisd meg a **Settings → Pages** oldalt. A *Build and deployment* résznél válaszd ezt: Source: **Deploy from a branch**, Branch: **main**, mappa: **/ (root)**. Utána kattints a **Save** gombra.
6. Várj 1–2 percet. A Pages oldal tetején megjelenik a cím, például:
   `https://<felhasználóneved>.github.io/dinovolgy/`

## iPadre telepítés

1. Nyisd meg a címet **Safariban**.
2. Koppints a **Megosztás** gombra, majd az **Add a Főképernyőhöz** lehetőségre.
3. Az app ezután saját ikonnal, teljes képernyőn indul, és offline is működik.

Tipp: fekvő helyzetben a legnagyobb a játéktér.

## Szülői sarok

A kezdőképernyő jobb felső sarkában lévő lakat ikont **2 másodpercig tartsd lenyomva**. Itt beállíthatod:

- a gyermek nevét,
- a számkört (10-ig vagy 20-ig),
- hány feladat legyen egy körben (3 vagy 5),
- melyik játék legyen elérhető,
- a felolvasást, a hangos számolást és a hangeffekteket.

Itt látod a haladást is.

## Jó tudni

- **Mentés:** a haladás azon az eszközön, abban a böngészőben marad meg, ahol a gyerek játszik. A kezdőképernyőre tett app és a Safari külön tárolót használ, ezért mindig a kezdőképernyős ikonról induljatok. Ha törlöd az ikont, a haladás is törlődik.
- **Felolvasás:** az iPad beépített magyar hangját használja. Ha angolosan szól, a magyar hangot itt töltheted le: **Beállítások → Kisegítő lehetőségek → Felolvasott tartalom → Hangok → Magyar**.
- **Nincs hang?** Nézd meg, hogy nincs-e lenémítva az iPad.
- **Frissítés:** ha később lecseréled valamelyik fájlt, a `sw.js` elején írd át a verziót (`dinovolgy-v1` → `dinovolgy-v2`). Így az iPad biztosan az új változatot tölti le. Ehhez egyszer internettel kell megnyitni az appot, utána pedig bezárni és újraindítani.

## Fájlok

| Fájl | Mire való |
| --- | --- |
| `index.html` | Maga a játék (minden kód és rajz egyben) |
| `manifest.webmanifest` | Név, ikon és teljes képernyős indítás |
| `sw.js` | Offline működés |
| `icon-*.png` | App ikonok |
| `baloo2-*.woff2`, `nunito-*.woff2` | Betűtípusok (SIL Open Font License, lásd: `LICENSE-fonts.txt`) |
