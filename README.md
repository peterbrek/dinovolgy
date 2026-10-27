# Dínóvölgy

Montessori-szerű, néma számolós iPad-játék dínókkal, 100-as számkörben. Minden befejezett kör egy tojást ér, három tojásból kikel egy új dínó.

- **Tojásszámlálás:** a tojások 10-es tartókban vannak. A tartókat tízesével kell megszámolni (10, 20, 30…), a maradék tojásokat egyesével.
- **Bogyólakoma:** összeadás 100-ig. Trici kap tízes fürtöket és egyes bogyókat. Ha a tálban 10 egyes bogyó összegyűlik, azok automatikusan egy tízes fürtté állnak össze, így látszik a tízesátlépés.
- **Kőösvény:** öt számkő 1 és 100 között, sorba kell rakni őket. Gyakran van köztük felcserélt számjegyű pár (pl. 27 és 72).

Az app egyetlen statikus weboldal. Nincs szükség szerverre, fiókra vagy telepítésre, és az első betöltés után internet nélkül is működik.

## Feltöltés GitHub Pagesre

1. A GitHubon hozz létre egy új, **Public** repót, például `dinovolgy` néven.
2. A repó oldalán kattints az **uploading an existing file** linkre (vagy az **Add file → Upload files** menüre).
3. Csomagold ki a zipet, jelöld ki **az összes fájlt** (13 darab), és húzd be őket. Gépen a behúzás, iPaden a *choose your files* gomb a kényelmesebb. Nincs almappa, minden fájl a repó gyökerébe kerül.
4. Kattints a **Commit changes** gombra.
5. Nyisd meg a **Settings → Pages** oldalt. A *Build and deployment* résznél válaszd ezt: Source: **Deploy from a branch**, Branch: **main**, mappa: **/ (root)**. Utána kattints a **Save** gombra.
6. Várj 1–2 percet. A Pages oldal tetején megjelenik a cím, például:
   `https://<felhasználóneved>.github.io/dinovolgy/`

### Ha az előző változat már fent van

Elég az `index.html`, a `sw.js` és a `README.md` fájlt újra feltölteni (**Add file → Upload files**, ugyanazzal a névvel), a többi nem változott. 1–2 perc múlva nyisd meg az appot az iPaden internettel, zárd be teljesen (az alkalmazásváltóban felhúzva), majd indítsd újra.

A korábbi haladás megmarad, és automatikusan átáll 100-as számkörre és Vilci nevére.

## iPadre telepítés

1. Nyisd meg a címet **Safariban**.
2. Koppints a **Megosztás** gombra, majd az **Add a Főképernyőhöz** lehetőségre.
3. Az app ezután saját ikonnal, teljes képernyőn indul, és offline is működik.

Tipp: fekvő helyzetben a legnagyobb a játéktér.

## Szülői sarok

A kezdőképernyő jobb felső sarkában lévő lakat ikont **2 másodpercig tartsd lenyomva**. Itt beállíthatod:

- a gyermek nevét (alapból Vilci),
- a számkört: 10-ig, 20-ig vagy 100-ig (alapból 100-ig),
- hány feladat legyen egy körben (3 vagy 5),
- melyik játék legyen elérhető.

Itt látod a haladást is, és itt van a **mentőkód**.

## Mentés

- A haladás (tojások, kikelt dínók, nevek, beállítások) **minden lépés után** elmentődik az iPadre. A félbehagyott kör is mentődik: újratöltés vagy bezárás után ugyanott folytatódik.
- A mentés ahhoz a helyhez tartozik, ahol a gyerek játszik. **A Safari és a kezdőképernyős ikon külön tárol**, ezért mindig az ikonról induljatok.
- **Mentőkód:** a szülői sarokban a *Mentőkód másolása* gomb vágólapra teszi a teljes haladást egy szövegként. A másik helyen (másik iPad, vagy Safari helyett a kezdőképernyős app) a *Mentőkód betöltése* gombbal visszatölthető. Ha törölni szeretnéd az ikont, előtte másold ki a kódot, és tedd el például egy jegyzetbe.
- A Safari a ritkán megnyitott weboldalak adatait idővel törölheti. A kezdőképernyőre tett appra ez nem vonatkozik.

## Frissítés

Ha később lecseréled valamelyik fájlt, a `sw.js` elején írd át a verziót (`dinovolgy-v2` → `dinovolgy-v3`). Így az iPad biztosan az új változatot tölti le. Ehhez egyszer internettel kell megnyitni az appot, utána pedig bezárni és újraindítani.

## Fájlok

| Fájl | Mire való |
| --- | --- |
| `index.html` | Maga a játék (minden kód és rajz egyben) |
| `manifest.webmanifest` | Név, ikon és teljes képernyős indítás |
| `sw.js` | Offline működés |
| `icon-*.png` | App ikonok |
| `baloo2-*.woff2`, `nunito-*.woff2` | Betűtípusok (SIL Open Font License, lásd: `LICENSE-fonts.txt`) |
