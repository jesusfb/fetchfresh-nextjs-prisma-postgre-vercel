"use client";

import Head from "next/head";
import React from "react";

export default function HowFetchFreshWorks() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        <Head>
          <title>Wie funktioniert FetchFresh?</title>
          <meta
            name="description"
            content="Erfahren Sie, wie FetchFresh funktioniert"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4">
          <h1 className="mb-10 text-center text-4xl font-bold">
            Wie funktioniert FetchFresh?
          </h1>

          <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">
              1. Einführung in FetchFresh
            </h2>
            <p className="mb-4">
              FetchFresh ist eine Online-Plattform für Lebensmittel-Lieferungen,
              die es einfach macht, Einkäufe bei Ihrem bevorzugten Supermarkt zu
              erledigen und direkt vor Ihre Haustür liefern zu lassen. Derzeit
              arbeitet FetchFresh exklusiv mit REWE zusammen, bietet Ihnen aber
              eine große Auswahl an Produkten und Lieferzeiten.
            </p>
            <p className="mb-4">
              Ob Sie frische Produkte, Haushaltsartikel oder Spezialitäten
              suchen, FetchFresh hat alles, was Sie brauchen. Unser Ziel ist es,
              den Einkauf so schnell und einfach wie möglich zu gestalten.
              Weitere Partner werden in Zukunft hinzukommen.
            </p>
          </section>

          <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">
              2. So funktioniert es
            </h2>
            <p className="mb-4">
              Der Bestellprozess bei FetchFresh ist einfach und
              benutzerfreundlich. So funktioniert es:
            </p>
            <ul className="mb-4 list-inside list-disc">
              <li>
                <strong>Schritt 1:</strong> Erstellen Sie ein Konto auf der
                FetchFresh-Plattform.
              </li>
              <li>
                <strong>Schritt 2:</strong> Durchstöbern Sie das umfangreiche
                Produktangebot von REWE in Ihrer Region.
              </li>
              <li>
                <strong>Schritt 3:</strong> Legen Sie Artikel in Ihren Warenkorb
                und gehen Sie zur Kasse, wenn Sie bereit sind.
              </li>
              <li>
                <strong>Schritt 4:</strong> Wählen Sie Ihre bevorzugte
                Lieferzeit und Zahlungsmethode.
              </li>
              <li>
                <strong>Schritt 5:</strong> Entspannen Sie sich, während
                FetchFresh Ihre Einkäufe an Ihre Haustür liefert.
              </li>
            </ul>
            <p className="mb-4">
              Mit FetchFresh werden sie immer per E-Mail benachrichtigt wo sich
              ihre Bestellung befindet, sodass Sie immer wissen, wann Sie Ihre
              Lieferung erwarten können.
            </p>
          </section>

          <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">
              3. Vorteile der Nutzung von FetchFresh
            </h2>
            <p className="mb-4">
              FetchFresh bietet mehrere Vorteile, die es zur besten Wahl für den
              Online-Lebensmitteleinkauf machen:
            </p>
            <ul className="mb-4 list-inside list-disc">
              <li>
                <strong>Bequemlichkeit:</strong> Einkaufen von zu Hause aus und
                vermeiden Sie den Aufwand, in den Supermarkt zu gehen.
              </li>
              <li>
                <strong>Große Auswahl:</strong> Zugriff auf eine breite Palette
                von Produkten bei REWE, Ihrem regionalen Supermarkt.
              </li>
              <li>
                <strong>Zeitersparnis:</strong> Sparen Sie Zeit, indem Sie Ihre
                Lebensmittel liefern lassen, anstatt Stunden im Geschäft zu
                verbringen.
              </li>
            </ul>
          </section>

          <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">
              4. Häufig gestellte Fragen (FAQs)
            </h2>
            <div className="mb-4">
              <h3 className="font-semibold">
                F: Wie viel kostet die Lieferung?
              </h3>
              <p>
                A: Die Liefergebühren variieren je nach Standort und Größe Ihrer
                Bestellung. Die Kosten werden Ihnen an der Kasse angezeigt,
                bevor Sie Ihre Bestellung aufgeben.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">
                F: Kann ich Lieferungen für eine bestimmte Zeit planen?
              </h3>
              <p>
                A: Ja, bei FetchFresh können Sie ein passendes Lieferzeitfenster
                wählen, das zu Ihrem Zeitplan passt.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">
                F: Von welchen Geschäften kann ich einkaufen?
              </h3>
              <p>
                A: Derzeit arbeitet FetchFresh exklusiv mit REWE zusammen. In
                Zukunft werden weitere Partnergeschäfte hinzukommen, um Ihnen
                noch mehr Auswahl zu bieten.
              </p>
            </div>
          </section>

          <section className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">5. Kundenstimmen</h2>
            <div className="mb-4">
              <p>
                <strong>John D.:</strong> FetchFresh hat meine Art des
                Lebensmitteleinkaufs völlig verändert. Es ist so bequem, alles
                direkt vor die Tür geliefert zu bekommen!
              </p>
            </div>
            <div className="mb-4">
              <p>
                <strong>Sarah M.:</strong> Ich liebe die Vielfalt an Produkten
                bei FetchFresh. Bei REWE finde ich alles, was ich brauche.
              </p>
            </div>
            <div className="mb-4">
              <p>
                <strong>Michael T.:</strong> Der Lieferservice ist zuverlässig
                und schnell. Ich empfehle FetchFresh jedem, der eine stressfreie
                Einkaufserfahrung sucht.
              </p>
            </div>
          </section>

          <section className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">
              6. Starten Sie noch heute mit FetchFresh!
            </h2>
            <p>
              Bereit, den Lebensmitteleinkauf so einfach wie nie zuvor zu
              machen? Melden Sie sich noch heute bei FetchFresh an und erleben
              Sie den Komfort der Online-Lebensmittellieferung.
            </p>
            <p>
              Egal, ob Sie ein vielbeschäftigter Berufstätiger, ein Elternteil
              oder jemand sind, der einfach Zeit sparen möchte – FetchFresh ist
              hier, um Ihnen zu helfen.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
