import type { Locale } from "./site";

/**
 * Structured privacy policy content.
 *
 * Text supports `**bold**` markers for lead-ins such as "Legal bases:".
 * Section ids are stable and shared across locales so anchors match.
 */
export type PrivacyBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "subheading"; text: string }
  | { kind: "address"; lines: string[] }
  | { kind: "email"; label: string; address: string };

export interface PrivacySection {
  id: string;
  title: string;
  blocks: PrivacyBlock[];
}

export interface PrivacyPolicy {
  title: string;
  contents: string;
  updatedLabel: string;
  updated: string;
  source: string;
  sections: PrivacySection[];
}

export const privacyPolicies: Record<Locale, PrivacyPolicy> = {
  en: {
    title: "Privacy policy",
    contents: "Contents",
    updatedLabel: "Last updated",
    updated: "14 November 2026",
    source:
      "Created with the free Datenschutz-Generator.de by Dr. Thomas Schwenke.",
    sections: [
      {
        id: "preamble",
        title: "Preamble",
        blocks: [
          {
            kind: "p",
            text: "With the following privacy policy, we would like to inform you about the types of your personal data (hereinafter also referred to as “data”) that we process, for what purposes and to what extent. This privacy policy applies to all processing of personal data carried out by us, both in the context of providing our services and, in particular, on our websites, in mobile applications and within external online presences such as our social media profiles (hereinafter collectively referred to as the “online offering”).",
          },
          {
            kind: "p",
            text: "The terms used are not gender-specific.",
          },
        ],
      },
      {
        id: "controller",
        title: "Controller",
        blocks: [
          {
            kind: "address",
            lines: [
              "Janne Loonen, Loonen Consulting",
              "Demminer Str. 3",
              "13355 Berlin",
              "Germany",
            ],
          },
          {
            kind: "email",
            label: "Email address",
            address: "info@loonenconsulting.com",
          },
        ],
      },
      {
        id: "overview",
        title: "Overview of processing",
        blocks: [
          {
            kind: "p",
            text: "The following overview summarises the types of data processed and the purposes of their processing, and refers to the data subjects concerned.",
          },
          { kind: "subheading", text: "Types of data processed" },
          {
            kind: "list",
            items: [
              "Inventory data.",
              "Contact data.",
              "Content data.",
              "Usage data.",
              "Meta, communication and process data.",
              "Log data.",
            ],
          },
          { kind: "subheading", text: "Categories of data subjects" },
          {
            kind: "list",
            items: [
              "Recipients of services and clients.",
              "Users.",
              "Third parties.",
            ],
          },
          { kind: "subheading", text: "Purposes of processing" },
          {
            kind: "list",
            items: [
              "Security measures.",
              "Provision of our online offering and user-friendliness.",
              "Information technology infrastructure.",
            ],
          },
        ],
      },
      {
        id: "legal-bases",
        title: "Relevant legal bases",
        blocks: [
          {
            kind: "p",
            text: "**Relevant legal bases under the GDPR:** Below you will find an overview of the legal bases of the GDPR on the basis of which we process personal data. Please note that, in addition to the provisions of the GDPR, national data protection requirements may apply in your or our country of residence or establishment. If more specific legal bases apply in individual cases, we will inform you of them in this privacy policy.",
          },
          {
            kind: "list",
            items: [
              "**Consent (Art. 6(1)(a) GDPR)** – The data subject has given their consent to the processing of personal data relating to them for a specific purpose or several specific purposes.",
              "**Legal obligation (Art. 6(1)(c) GDPR)** – Processing is necessary for compliance with a legal obligation to which the controller is subject.",
              "**Legitimate interests (Art. 6(1)(f) GDPR)** – Processing is necessary for the purposes of the legitimate interests pursued by the controller or a third party, provided that the interests, fundamental rights and fundamental freedoms of the data subject that require the protection of personal data do not override them.",
            ],
          },
          {
            kind: "p",
            text: "**National data protection regulations in Germany:** In addition to the data protection provisions of the GDPR, national data protection regulations apply in Germany. These include, in particular, the Federal Data Protection Act (Bundesdatenschutzgesetz – BDSG). The BDSG contains specific provisions on the right of access, the right to erasure, the right to object, the processing of special categories of personal data, processing for other purposes, and disclosure as well as automated decision-making in individual cases, including profiling. Data protection laws of the individual federal states may also apply.",
          },
          {
            kind: "p",
            text: "**Note on the applicability of the GDPR and the Swiss DSG:** These privacy notices serve to provide information both under the Swiss Data Protection Act (DSG) and under the General Data Protection Regulation (GDPR). For this reason, we ask you to note that the terminology of the GDPR is used, given its broader territorial scope and for ease of understanding. In particular, instead of the terms “Bearbeitung” (processing) of “Personendaten” (personal data), “überwiegendes Interesse” (overriding interest) and “besonders schützenswerte Personendaten” (personal data requiring special protection) used in the Swiss DSG, we use the GDPR terms “Verarbeitung” (processing) of “personenbezogene Daten” (personal data) as well as “berechtigtes Interesse” (legitimate interest) and “besondere Kategorien von Daten” (special categories of data). However, within the scope of the Swiss DSG, the legal meaning of these terms continues to be determined by the Swiss DSG.",
          },
          {
            kind: "p",
            text: "**Applicability of data protection requirements in the country of establishment:** In the country in which the controller is established, national data protection provisions apply alongside the General Data Protection Regulation (GDPR).",
          },
        ],
      },
      {
        id: "security",
        title: "Security measures",
        blocks: [
          {
            kind: "p",
            text: "In accordance with the statutory requirements, and taking into account the state of the art, the costs of implementation and the nature, scope, circumstances and purposes of processing, as well as the varying likelihood and severity of the threat to the rights and freedoms of natural persons, we take appropriate technical and organisational measures to ensure a level of protection appropriate to the risk.",
          },
          {
            kind: "p",
            text: "These measures include, in particular, safeguarding the confidentiality, integrity and availability of data by controlling physical and electronic access to the data as well as access to, input of, disclosure of, and separation of the data, and by ensuring their availability. We have also established procedures to ensure that data subjects can exercise their rights and that data can be deleted and that we can respond to data breaches. Furthermore, we take the protection of personal data into account at the development stage and in the selection of hardware, software and procedures, in accordance with the principle of data protection through technology design and through data protection-friendly default settings.",
          },
          {
            kind: "p",
            text: "**Securing online connections with TLS/SSL encryption technology (HTTPS):** To protect users’ data transmitted via our online services against unauthorised access, we rely on TLS/SSL encryption technology. Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are the cornerstones of secure data transmission on the internet. These technologies encrypt the information that is transmitted between the website or app and the user’s browser (or between two servers), thereby protecting the data against unauthorised access. TLS, as the more advanced and more secure version of SSL, ensures that all data transmissions meet the highest security standards. Where a website is secured by an SSL/TLS certificate, this is indicated by HTTPS in the URL. This serves as an indicator to users that their data is transmitted securely and encrypted.",
          },
        ],
      },
      {
        id: "storage",
        title: "General information on data storage and deletion",
        blocks: [
          {
            kind: "p",
            text: "We delete personal data that we process in accordance with the statutory provisions as soon as the consent on which the processing is based is withdrawn or no further legal basis for the processing exists. This applies in cases where the original purpose of processing no longer applies or the data is no longer required. Exceptions to this rule apply where statutory obligations or particular interests require the data to be retained or archived for longer.",
          },
          {
            kind: "p",
            text: "In particular, data that must be retained for commercial or tax law reasons, or whose storage is necessary for legal prosecution or for the protection of the rights of other natural or legal persons, must be archived accordingly.",
          },
          {
            kind: "p",
            text: "Our privacy notices contain additional information on the retention and deletion of data that applies specifically to certain processing operations.",
          },
          {
            kind: "p",
            text: "Where several retention periods or deletion deadlines apply to the same date, the longest period always prevails. We process data that is retained not for its originally intended purpose but on the basis of statutory requirements or other reasons exclusively for the reasons that justify its retention.",
          },
          {
            kind: "p",
            text: "**Periods beginning at the end of the year:** If a period does not expressly begin on a specific date and lasts at least one year, it automatically begins at the end of the calendar year in which the event triggering the period occurred. In the case of ongoing contractual relationships within the framework of which data is stored, the triggering event is the date on which the termination or other end of the legal relationship takes effect.",
          },
        ],
      },
      {
        id: "rights",
        title: "Rights of data subjects",
        blocks: [
          {
            kind: "p",
            text: "**Data subject rights under the GDPR:** As a data subject, you have various rights under the GDPR, which arise in particular from Art. 15 to 21 GDPR:",
          },
          {
            kind: "list",
            items: [
              "**Right to object:** You have the right to object at any time, on grounds relating to your particular situation, to the processing of personal data concerning you which is based on Art. 6(1)(e) or (f) GDPR; this also applies to profiling based on those provisions. Where personal data concerning you is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for the purpose of such advertising; this also applies to profiling insofar as it is associated with such direct marketing.",
              "**Right to withdraw consent:** You have the right to withdraw any consent you have given at any time.",
              "**Right of access:** You have the right to request confirmation as to whether data concerning you is being processed, and to obtain access to that data as well as further information and a copy of the data in accordance with the statutory requirements.",
              "**Right to rectification:** In accordance with the statutory requirements, you have the right to request the completion of data concerning you or the rectification of inaccurate data concerning you.",
              "**Right to erasure and restriction of processing:** In accordance with the statutory requirements, you have the right to request that data concerning you be erased without undue delay or, alternatively, to request a restriction of the processing of the data.",
              "**Right to data portability:** You have the right, in accordance with the statutory requirements, to receive the data concerning you that you have provided to us in a structured, commonly used and machine-readable format, or to request that it be transmitted to another controller.",
              "**Complaint to a supervisory authority:** Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a data protection supervisory authority if you consider that the processing of your personal data infringes the GDPR. The complaint may in particular be lodged with a supervisory authority in the Member State of your habitual residence, your place of work or the place of the alleged infringement.",
            ],
          },
        ],
      },
      {
        id: "hosting",
        title: "Provision of the online offering and web hosting",
        blocks: [
          {
            kind: "p",
            text: "We process users’ data in order to provide them with our online services. For this purpose, we process the user’s IP address, which is necessary to transmit the content and functions of our online services to the user’s browser or end device.",
          },
          {
            kind: "list",
            items: [
              "**Types of data processed:** Usage data (e.g. page views and time spent, click paths, intensity and frequency of use, device types and operating systems used, interactions with content and functions); meta, communication and process data (e.g. IP addresses, timestamps, identification numbers, persons involved); log data (e.g. log files relating to logins or the retrieval of data or access times).",
              "**Data subjects:** Users (e.g. website visitors, users of online services).",
              "**Purposes of processing and legitimate interests:** Provision of our online offering and user-friendliness; information technology infrastructure (operation and provision of information systems and technical equipment such as computers and servers); security measures.",
              "**Retention and deletion:** Deletion in accordance with the information in the section “General information on data storage and deletion”.",
              "**Legal bases:** Legitimate interests (Art. 6(1)(f) GDPR).",
            ],
          },
          {
            kind: "subheading",
            text: "Further information on processing operations, procedures and services:",
          },
          {
            kind: "list",
            items: [
              "**Provision of the online offering on rented storage space:** To provide our online offering, we use storage space, computing capacity and software that we rent or otherwise obtain from a corresponding server provider (also referred to as a “web host”); **legal bases:** legitimate interests (Art. 6(1)(f) GDPR).",
              "**Collection of access data and log files:** Access to our online offering is logged in the form of so-called “server log files”. Server log files may include the address and name of the web pages and files retrieved, the date and time of retrieval, the amount of data transferred, the message about a successful retrieval, the browser type and version, the user’s operating system, the referrer URL (the previously visited page) and, as a rule, IP addresses and the requesting provider. Server log files may be used, on the one hand, for security purposes, e.g. to avoid overloading the servers (in particular in the case of abusive attacks, so-called DDoS attacks), and, on the other hand, to ensure the utilisation and stability of the servers; **legal bases:** legitimate interests (Art. 6(1)(f) GDPR). **Deletion of data:** Log file information is stored for a maximum of 30 days and then deleted or anonymised. Data whose further retention is necessary for evidentiary purposes is exempt from deletion until the relevant incident has been finally clarified.",
            ],
          },
        ],
      },
      {
        id: "changes",
        title: "Changes and updates",
        blocks: [
          {
            kind: "p",
            text: "We ask you to check our privacy policy regularly. We adapt the privacy policy as soon as changes to the data processing we carry out make this necessary. We will inform you as soon as the changes require any action on your part (e.g. consent) or any other individual notification.",
          },
          {
            kind: "p",
            text: "Where we provide addresses and contact information of companies and organisations in this privacy policy, please note that addresses may change over time and please check the information before contacting them.",
          },
        ],
      },
      {
        id: "definitions",
        title: "Definitions of terms",
        blocks: [
          {
            kind: "p",
            text: "This section provides an overview of the terminology used in this privacy policy. Where the terms are legally defined, their statutory definitions apply. The explanations below are intended primarily to aid understanding.",
          },
          {
            kind: "list",
            items: [
              "**Inventory data:** Inventory data comprises essential information required for the identification and management of contractual partners, user accounts, profiles and similar assignments. This data may include, among other things, personal and demographic information such as names, contact information (addresses, telephone numbers, email addresses), dates of birth and specific identifiers (user IDs). Inventory data forms the basis for any formal interaction between persons and services, institutions or systems by enabling unique assignment and communication.",
              "**Content data:** Content data comprises information generated in the course of creating, editing and publishing content of all kinds. This category of data may include texts, images, videos, audio files and other multimedia content published on various platforms and media. Content data is not limited to the actual content but also includes metadata that provides information about the content itself, such as tags, descriptions, author information and publication dates.",
              "**Contact data:** Contact data is essential information that enables communication with persons or organisations. It includes, among other things, telephone numbers, postal addresses and email addresses, as well as communication channels such as social media handles and instant messaging identifiers.",
              "**Meta, communication and process data:** Meta, communication and process data are categories that contain information about the way in which data is processed, transmitted and managed. Meta data, also known as data about data, comprises information that describes the context, origin and structure of other data. It may include information on file size, creation date, the author of a document and its change history. Communication data records the exchange of information between users across various channels, such as email traffic, call logs, messages in social networks and chat histories, including the persons involved, timestamps and transmission channels. Process data describes the processes and workflows within systems or organisations, including workflow documentation, records of transactions and activities, and audit logs used to track and review operations.",
              "**Usage data:** Usage data refers to information that captures how users interact with digital products, services or platforms. This data comprises a wide range of information showing how users use applications, which functions they prefer, how long they stay on certain pages and which paths they navigate through an application. Usage data may also include frequency of use, timestamps of activities, IP addresses, device information and location data. It is particularly valuable for analysing user behaviour, optimising user experiences, personalising content and improving products or services. In addition, usage data plays a decisive role in identifying trends, preferences and potential problem areas within digital offerings.",
              "**Personal data:** “Personal data” is all information relating to an identified or identifiable natural person (hereinafter “data subject”); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier (e.g. a cookie) or one or more specific characteristics that are an expression of the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.",
              "**Log data:** Log data is information about events or activities that have been logged in a system or network. This data typically contains information such as timestamps, IP addresses, user actions, error messages and other details about the use or operation of a system. Log data is often used to analyse system problems, monitor security or produce performance reports.",
              "**Controller:** A “controller” is the natural or legal person, public authority, agency or other body which alone or jointly with others determines the purposes and means of the processing of personal data.",
              "**Processing:** “Processing” is any operation or series of operations carried out on personal data, with or without the aid of automated means. The term is broad and covers virtually any handling of data, whether collecting, evaluating, storing, transmitting or deleting it.",
            ],
          },
        ],
      },
    ],
  },

  de: {
    title: "Datenschutzerklärung",
    contents: "Inhaltsübersicht",
    updatedLabel: "Stand",
    updated: "14. November 2026",
    source:
      "Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke.",
    sections: [
      {
        id: "praeambel",
        title: "Präambel",
        blocks: [
          {
            kind: "p",
            text: "Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als „Daten“ bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als „Onlineangebot“).",
          },
          {
            kind: "p",
            text: "Die verwendeten Begriffe sind nicht geschlechtsspezifisch.",
          },
        ],
      },
      {
        id: "verantwortlicher",
        title: "Verantwortlicher",
        blocks: [
          {
            kind: "address",
            lines: [
              "Janne Loonen, Loonen Consulting",
              "Demminer Str. 3",
              "13355 Berlin",
              "Deutschland",
            ],
          },
          {
            kind: "email",
            label: "E-Mail-Adresse",
            address: "info@loonenconsulting.com",
          },
        ],
      },
      {
        id: "uebersicht",
        title: "Übersicht der Verarbeitungen",
        blocks: [
          {
            kind: "p",
            text: "Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.",
          },
          { kind: "subheading", text: "Arten der verarbeiteten Daten" },
          {
            kind: "list",
            items: [
              "Bestandsdaten.",
              "Kontaktdaten.",
              "Inhaltsdaten.",
              "Nutzungsdaten.",
              "Meta-, Kommunikations- und Verfahrensdaten.",
              "Protokolldaten.",
            ],
          },
          { kind: "subheading", text: "Kategorien betroffener Personen" },
          {
            kind: "list",
            items: [
              "Leistungsempfänger und Auftraggeber.",
              "Nutzer.",
              "Dritte Personen.",
            ],
          },
          { kind: "subheading", text: "Zwecke der Verarbeitung" },
          {
            kind: "list",
            items: [
              "Sicherheitsmaßnahmen.",
              "Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit.",
              "Informationstechnische Infrastruktur.",
            ],
          },
        ],
      },
      {
        id: "rechtsgrundlagen",
        title: "Maßgebliche Rechtsgrundlagen",
        blocks: [
          {
            kind: "p",
            text: "**Maßgebliche Rechtsgrundlagen nach der DSGVO:** Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.",
          },
          {
            kind: "list",
            items: [
              "**Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)** – Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.",
              "**Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c) DSGVO)** – Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.",
              "**Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)** – Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten verlangen, nicht überwiegen.",
            ],
          },
          {
            kind: "p",
            text: "**Nationale Datenschutzregelungen in Deutschland:** Zusätzlich zu den Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere das Bundesdatenschutzgesetz (BDSG). Das BDSG enthält insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall einschließlich Profiling. Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur Anwendung gelangen.",
          },
          {
            kind: "p",
            text: "**Hinweis auf Geltung DSGVO und Schweizer DSG:** Diese Datenschutzhinweise dienen sowohl der Informationserteilung nach dem Schweizer DSG als auch nach der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund bitten wir Sie zu beachten, dass aufgrund der breiteren räumlichen Anwendung und Verständlichkeit die Begriffe der DSGVO verwendet werden. Insbesondere statt der im Schweizer DSG verwendeten Begriffe „Bearbeitung“ von „Personendaten“, „überwiegendes Interesse“ und „besonders schützenswerte Personendaten“ werden die in der DSGVO verwendeten Begriffe „Verarbeitung“ von „personenbezogenen Daten“ sowie „berechtigtes Interesse“ und „besondere Kategorien von Daten“ verwendet. Die gesetzliche Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.",
          },
          {
            kind: "p",
            text: "**Geltung der Datenschutzvorgaben im Sitzland:** In dem Land, in dem der Verantwortliche seinen Sitz hat, gelten neben der Datenschutz-Grundverordnung (DSGVO) auch nationale Datenschutzvorschriften.",
          },
        ],
      },
      {
        id: "sicherheitsmassnahmen",
        title: "Sicherheitsmaßnahmen",
        blocks: [
          {
            kind: "p",
            text: "Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.",
          },
          {
            kind: "p",
            text: "Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.",
          },
          {
            kind: "p",
            text: "**Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS):** Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.",
          },
        ],
      },
      {
        id: "speicherung",
        title: "Allgemeine Informationen zur Datenspeicherung und Löschung",
        blocks: [
          {
            kind: "p",
            text: "Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser Regelung bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung oder Archivierung der Daten erfordern.",
          },
          {
            kind: "p",
            text: "Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.",
          },
          {
            kind: "p",
            text: "Unsere Datenschutzhinweise enthalten zusätzliche Informationen zur Aufbewahrung und Löschung von Daten, die speziell für bestimmte Verarbeitungsprozesse gelten.",
          },
          {
            kind: "p",
            text: "Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist stets die längste Frist maßgeblich. Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben oder anderer Gründe aufbewahrt werden, verarbeiten wir ausschließlich zu den Gründen, die ihre Aufbewahrung rechtfertigen.",
          },
          {
            kind: "p",
            text: "**Fristbeginn mit Ablauf des Jahres:** Beginnt eine Frist nicht ausdrücklich zu einem bestimmten Datum und beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende des Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist. Im Fall laufender Vertragsverhältnisse, in deren Rahmen Daten gespeichert werden, ist das fristauslösende Ereignis der Zeitpunkt des Wirksamwerdens der Kündigung oder sonstige Beendigung des Rechtsverhältnisses.",
          },
        ],
      },
      {
        id: "rechte",
        title: "Rechte der betroffenen Personen",
        blocks: [
          {
            kind: "p",
            text: "**Rechte der betroffenen Personen aus der DSGVO:** Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:",
          },
          {
            kind: "list",
            items: [
              "**Widerspruchsrecht:** Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.",
              "**Widerrufsrecht bei Einwilligungen:** Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.",
              "**Auskunftsrecht:** Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.",
              "**Recht auf Berichtigung:** Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.",
              "**Recht auf Löschung und Einschränkung der Verarbeitung:** Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.",
              "**Recht auf Datenübertragbarkeit:** Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.",
              "**Beschwerde bei Aufsichtsbehörde:** Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs haben Sie das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. Die Beschwerde kann insbesondere bei einer Aufsichtsbehörde in dem Mitgliedstaat Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes eingelegt werden.",
            ],
          },
        ],
      },
      {
        id: "hosting",
        title: "Bereitstellung des Onlineangebots und Webhosting",
        blocks: [
          {
            kind: "p",
            text: "Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der Nutzer zu übermitteln.",
          },
          {
            kind: "list",
            items: [
              "**Verarbeitete Datenarten:** Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen); Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen); Protokolldaten (z. B. Logfiles betreffend Logins oder den Abruf von Daten oder Zugriffszeiten).",
              "**Betroffene Personen:** Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten).",
              "**Zwecke der Verarbeitung und berechtigte Interessen:** Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit; Informationstechnische Infrastruktur (Betrieb und Bereitstellung von Informationssystemen und technischen Geräten (Computer, Server etc.)); Sicherheitsmaßnahmen.",
              "**Aufbewahrung und Löschung:** Löschung entsprechend Angaben im Abschnitt „Allgemeine Informationen zur Datenspeicherung und Löschung“.",
              "**Rechtsgrundlagen:** Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).",
            ],
          },
          {
            kind: "subheading",
            text: "Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:",
          },
          {
            kind: "list",
            items: [
              "**Bereitstellung Onlineangebot auf gemietetem Speicherplatz:** Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz, Rechenkapazität und Software, die wir von einem entsprechenden Serveranbieter (auch „Webhoster“ genannt) mieten oder anderweitig beziehen; **Rechtsgrundlagen:** Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).",
              "**Erhebung von Zugriffsdaten und Logfiles:** Der Zugriff auf unser Onlineangebot wird in Form von sogenannten „Server-Logfiles“ protokolliert. Zu den Serverlogfiles können die Adresse und der Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der anfragende Provider gehören. Die Serverlogfiles können zum einen zu Sicherheitszwecken eingesetzt werden, z. B. um eine Überlastung der Server zu vermeiden (insbesondere im Fall von missbräuchlichen Angriffen, sogenannten DDoS-Attacken), und zum anderen, um die Auslastung der Server und ihre Stabilität sicherzustellen; **Rechtsgrundlagen:** Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). **Löschung von Daten:** Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach gelöscht oder anonymisiert. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.",
            ],
          },
        ],
      },
      {
        id: "aenderung",
        title: "Änderung und Aktualisierung",
        blocks: [
          {
            kind: "p",
            text: "Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.",
          },
          {
            kind: "p",
            text: "Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.",
          },
        ],
      },
      {
        id: "begriffe",
        title: "Begriffsdefinitionen",
        blocks: [
          {
            kind: "p",
            text: "In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten. Soweit die Begrifflichkeiten gesetzlich definiert sind, gelten deren gesetzliche Definitionen. Die nachfolgenden Erläuterungen sollen dagegen vor allem dem Verständnis dienen.",
          },
          {
            kind: "list",
            items: [
              "**Bestandsdaten:** Bestandsdaten umfassen wesentliche Informationen, die für die Identifikation und Verwaltung von Vertragspartnern, Benutzerkonten, Profilen und ähnlichen Zuordnungen notwendig sind. Diese Daten können u. a. persönliche und demografische Angaben wie Namen, Kontaktinformationen (Adressen, Telefonnummern, E-Mail-Adressen), Geburtsdaten und spezifische Identifikatoren (Benutzer-IDs) beinhalten. Bestandsdaten bilden die Grundlage für jegliche formelle Interaktion zwischen Personen und Diensten, Einrichtungen oder Systemen, indem sie eine eindeutige Zuordnung und Kommunikation ermöglichen.",
              "**Inhaltsdaten:** Inhaltsdaten umfassen Informationen, die im Zuge der Erstellung, Bearbeitung und Veröffentlichung von Inhalten aller Art generiert werden. Diese Kategorie von Daten kann Texte, Bilder, Videos, Audiodateien und andere multimediale Inhalte einschließen, die auf verschiedenen Plattformen und Medien veröffentlicht werden. Inhaltsdaten sind nicht nur auf den eigentlichen Inhalt beschränkt, sondern beinhalten auch Metadaten, die Informationen über den Inhalt selbst liefern, wie Tags, Beschreibungen, Autoreninformationen und Veröffentlichungsdaten.",
              "**Kontaktdaten:** Kontaktdaten sind essentielle Informationen, die die Kommunikation mit Personen oder Organisationen ermöglichen. Sie umfassen u. a. Telefonnummern, postalische Adressen und E-Mail-Adressen sowie Kommunikationsmittel wie soziale Medien-Handles und Instant-Messaging-Identifikatoren.",
              "**Meta-, Kommunikations- und Verfahrensdaten:** Meta-, Kommunikations- und Verfahrensdaten sind Kategorien, die Informationen über die Art und Weise enthalten, wie Daten verarbeitet, übermittelt und verwaltet werden. Meta-Daten, auch bekannt als Daten über Daten, umfassen Informationen, die den Kontext, die Herkunft und die Struktur anderer Daten beschreiben. Sie können Angaben zur Dateigröße, dem Erstellungsdatum, dem Autor eines Dokuments und den Änderungshistorien beinhalten. Kommunikationsdaten erfassen den Austausch von Informationen zwischen Nutzern über verschiedene Kanäle, wie E-Mail-Verkehr, Anrufprotokolle, Nachrichten in sozialen Netzwerken und Chat-Verläufe, inklusive der beteiligten Personen, Zeitstempel und Übertragungswege. Verfahrensdaten beschreiben die Prozesse und Abläufe innerhalb von Systemen oder Organisationen, einschließlich Workflow-Dokumentationen, Protokolle von Transaktionen und Aktivitäten sowie Audit-Logs, die zur Nachverfolgung und Überprüfung von Vorgängen verwendet werden.",
              "**Nutzungsdaten:** Nutzungsdaten beziehen sich auf Informationen, die erfassen, wie Nutzer mit digitalen Produkten, Dienstleistungen oder Plattformen interagieren. Diese Daten umfassen eine breite Palette von Informationen, die aufzeigen, wie Nutzer Anwendungen nutzen, welche Funktionen sie bevorzugen, wie lange sie auf bestimmten Seiten verweilen und über welche Pfade sie durch eine Anwendung navigieren. Nutzungsdaten können auch die Häufigkeit der Nutzung, Zeitstempel von Aktivitäten, IP-Adressen, Geräteinformationen und Standortdaten einschließen. Sie sind besonders wertvoll für die Analyse des Nutzerverhaltens, die Optimierung von Benutzererfahrungen, das Personalisieren von Inhalten und das Verbessern von Produkten oder Dienstleistungen. Darüber hinaus spielen Nutzungsdaten eine entscheidende Rolle beim Erkennen von Trends, Vorlieben und möglichen Problembereichen innerhalb digitaler Angebote.",
              "**Personenbezogene Daten:** „Personenbezogene Daten“ sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung (z. B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.",
              "**Protokolldaten:** Protokolldaten sind Informationen über Ereignisse oder Aktivitäten, die in einem System oder Netzwerk protokolliert wurden. Diese Daten enthalten typischerweise Informationen wie Zeitstempel, IP-Adressen, Benutzeraktionen, Fehlermeldungen und andere Details über die Nutzung oder den Betrieb eines Systems. Protokolldaten werden oft zur Analyse von Systemproblemen, zur Sicherheitsüberwachung oder zur Erstellung von Leistungsberichten verwendet.",
              "**Verantwortlicher:** Als „Verantwortlicher“ wird die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.",
              "**Verarbeitung:** „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.",
            ],
          },
        ],
      },
    ],
  },

  "pt-BR": {
    title: "Política de privacidade",
    contents: "Sumário",
    updatedLabel: "Última atualização",
    updated: "14 de novembro de 2026",
    source:
      "Criado com o Datenschutz-Generator.de gratuito, do Dr. Thomas Schwenke.",
    sections: [
      {
        id: "preambulo",
        title: "Preâmbulo",
        blocks: [
          {
            kind: "p",
            text: "Com a seguinte política de privacidade, gostaríamos de informar você sobre quais tipos dos seus dados pessoais (a seguir também designados simplesmente como “dados”) tratamos, com quais finalidades e em que medida. Esta política de privacidade se aplica a todos os tratamentos de dados pessoais realizados por nós, tanto no âmbito da prestação dos nossos serviços quanto, em especial, nos nossos sites, em aplicativos móveis e em presenças online externas, como os nossos perfis em redes sociais (a seguir designados coletivamente como “oferta online”).",
          },
          {
            kind: "p",
            text: "Os termos utilizados não se referem a um gênero específico.",
          },
        ],
      },
      {
        id: "controlador",
        title: "Controlador",
        blocks: [
          {
            kind: "address",
            lines: [
              "Janne Loonen, Loonen Consulting",
              "Demminer Str. 3",
              "13355 Berlin",
              "Alemanha",
            ],
          },
          {
            kind: "email",
            label: "Endereço de e-mail",
            address: "info@loonenconsulting.com",
          },
        ],
      },
      {
        id: "visao-geral",
        title: "Visão geral dos tratamentos",
        blocks: [
          {
            kind: "p",
            text: "A visão geral a seguir resume os tipos de dados tratados e as finalidades do seu tratamento e indica os titulares dos dados afetados.",
          },
          { kind: "subheading", text: "Tipos de dados tratados" },
          {
            kind: "list",
            items: [
              "Dados cadastrais.",
              "Dados de contato.",
              "Dados de conteúdo.",
              "Dados de uso.",
              "Dados de metadados, de comunicação e de processo.",
              "Dados de registro.",
            ],
          },
          { kind: "subheading", text: "Categorias de titulares dos dados" },
          {
            kind: "list",
            items: [
              "Beneficiários de serviços e clientes.",
              "Usuários.",
              "Terceiros.",
            ],
          },
          { kind: "subheading", text: "Finalidades do tratamento" },
          {
            kind: "list",
            items: [
              "Medidas de segurança.",
              "Disponibilização da nossa oferta online e facilidade de uso.",
              "Infraestrutura de tecnologia da informação.",
            ],
          },
        ],
      },
      {
        id: "bases-legais",
        title: "Bases legais aplicáveis",
        blocks: [
          {
            kind: "p",
            text: "**Bases legais aplicáveis segundo o RGPD:** A seguir, você encontra uma visão geral das bases legais do RGPD com base nas quais tratamos dados pessoais. Observe que, além das disposições do RGPD, podem ser aplicadas normas nacionais de proteção de dados no seu ou no nosso país de residência ou sede. Caso, em um caso concreto, sejam aplicáveis bases legais mais específicas, informaremos você sobre elas nesta política de privacidade.",
          },
          {
            kind: "list",
            items: [
              "**Consentimento (art. 6º, § 1º, frase 1, alínea “a”, do RGPD)** – O titular dos dados consentiu com o tratamento dos dados pessoais a ele referentes para uma finalidade específica ou para várias finalidades determinadas.",
              "**Obrigação legal (art. 6º, § 1º, frase 1, alínea “c”, do RGPD)** – O tratamento é necessário para o cumprimento de uma obrigação legal à qual o controlador está sujeito.",
              "**Interesses legítimos (art. 6º, § 1º, frase 1, alínea “f”, do RGPD)** – O tratamento é necessário para atender aos interesses legítimos do controlador ou de um terceiro, desde que não prevaleçam os interesses, direitos fundamentais e liberdades fundamentais do titular dos dados que exijam a proteção de dados pessoais.",
            ],
          },
          {
            kind: "p",
            text: "**Normas nacionais de proteção de dados na Alemanha:** Além das normas de proteção de dados do RGPD, vigoram na Alemanha normas nacionais de proteção de dados. Entre elas está, em especial, a Lei Federal de Proteção de Dados (Bundesdatenschutzgesetz – BDSG). A BDSG contém, em particular, disposições específicas sobre o direito de acesso, o direito de exclusão, o direito de oposição, o tratamento de categorias especiais de dados pessoais, o tratamento para outras finalidades e a transmissão, bem como a tomada de decisões automatizadas em casos individuais, incluindo a definição de perfis. Além disso, as leis de proteção de dados dos diferentes estados federais também podem ser aplicadas.",
          },
          {
            kind: "p",
            text: "**Observação sobre a aplicação do RGPD e da LPD suíça:** Estas informações de privacidade servem tanto para prestar informações nos termos da Lei Federal de Proteção de Dados (LPD) quanto nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD). Por esse motivo, pedimos que observe que, devido ao âmbito territorial mais amplo e à maior facilidade de compreensão, são utilizados os termos do RGPD. Em especial, em vez dos termos “Bearbeitung” (tratamento) de “Personendaten” (dados pessoais), “überwiegendes Interesse” (interesse preponderante) e “besonders schützenswerte Personendaten” (dados pessoais especialmente sensíveis) utilizados na LPD suíça, são utilizados os termos do RGPD “Verarbeitung” (tratamento) de “personenbezogene Daten” (dados pessoais), bem como “berechtigtes Interesse” (interesse legítimo) e “besondere Kategorien von Daten” (categorias especiais de dados). O significado jurídico dos termos, no entanto, continua sendo determinado pela LPD suíça no âmbito da sua aplicação.",
          },
          {
            kind: "p",
            text: "**Aplicação das normas de proteção de dados no país de sede:** No país em que o controlador tem a sua sede, além do Regulamento Geral sobre a Proteção de Dados (RGPD), também se aplicam as normas nacionais de proteção de dados.",
          },
        ],
      },
      {
        id: "seguranca",
        title: "Medidas de segurança",
        blocks: [
          {
            kind: "p",
            text: "Em conformidade com as exigências legais e considerando o estado da técnica, os custos de implementação, a natureza, o âmbito, as circunstâncias e as finalidades do tratamento, bem como as diferentes probabilidades de ocorrência e a gravidade da ameaça aos direitos e liberdades das pessoas naturais, adotamos medidas técnicas e organizacionais adequadas para garantir um nível de proteção proporcional ao risco.",
          },
          {
            kind: "p",
            text: "As medidas incluem, em especial, a garantia da confidencialidade, integridade e disponibilidade dos dados por meio do controle do acesso físico e eletrônico aos dados, bem como do acesso, da inserção, da transmissão, da garantia da disponibilidade e da sua separação. Além disso, estabelecemos procedimentos que asseguram o exercício dos direitos dos titulares, a exclusão de dados e a reação a ameaças aos dados. Consideramos também a proteção de dados pessoais já no desenvolvimento ou na seleção de hardware, software e procedimentos, de acordo com o princípio da proteção de dados desde a concepção e por meio de configurações padrão favoráveis à proteção de dados.",
          },
          {
            kind: "p",
            text: "**Proteção das conexões online com tecnologia de criptografia TLS/SSL (HTTPS):** Para proteger os dados dos usuários transmitidos por meio dos nossos serviços online contra acessos não autorizados, utilizamos a tecnologia de criptografia TLS/SSL. Secure Sockets Layer (SSL) e Transport Layer Security (TLS) são os pilares da transmissão segura de dados na internet. Essas tecnologias criptografam as informações transmitidas entre o site ou aplicativo e o navegador do usuário (ou entre dois servidores), protegendo os dados contra acesso não autorizado. O TLS, como versão mais avançada e segura do SSL, garante que todas as transmissões de dados atendam aos mais altos padrões de segurança. Quando um site é protegido por um certificado SSL/TLS, isso é indicado pela exibição de HTTPS na URL. Isso serve como indicador, para os usuários, de que os seus dados são transmitidos de forma segura e criptografada.",
          },
        ],
      },
      {
        id: "armazenamento",
        title: "Informações gerais sobre armazenamento e exclusão de dados",
        blocks: [
          {
            kind: "p",
            text: "Excluímos os dados pessoais que tratamos em conformidade com as disposições legais assim que os consentimentos que os fundamentam forem revogados ou deixar de existir qualquer outra base legal para o tratamento. Isso se aplica aos casos em que a finalidade original do tratamento deixa de existir ou os dados não são mais necessários. Há exceções a essa regra quando obrigações legais ou interesses especiais exigem a conservação ou o arquivamento dos dados por um período mais longo.",
          },
          {
            kind: "p",
            text: "Em especial, os dados que precisam ser conservados por razões comerciais ou fiscais, ou cujo armazenamento é necessário para a defesa de direitos ou para a proteção dos direitos de outras pessoas naturais ou jurídicas, devem ser arquivados de forma correspondente.",
          },
          {
            kind: "p",
            text: "As nossas informações de privacidade contêm informações adicionais sobre a conservação e a exclusão de dados que se aplicam especificamente a determinados processos de tratamento.",
          },
          {
            kind: "p",
            text: "Quando houver várias indicações de prazos de conservação ou de exclusão para a mesma data, prevalece sempre o prazo mais longo. Os dados que são conservados não para a finalidade originalmente prevista, mas em razão de exigências legais ou de outros motivos, são tratados exclusivamente pelos motivos que justificam a sua conservação.",
          },
          {
            kind: "p",
            text: "**Início do prazo com o fim do ano:** Se um prazo não começar expressamente em uma data determinada e for de pelo menos um ano, ele começa automaticamente no fim do ano civil em que ocorreu o evento que o desencadeou. No caso de relações contratuais em curso no âmbito das quais os dados são armazenados, o evento desencadeador é a data em que a rescisão ou outra forma de encerramento da relação jurídica produz efeitos.",
          },
        ],
      },
      {
        id: "direitos",
        title: "Direitos dos titulares dos dados",
        blocks: [
          {
            kind: "p",
            text: "**Direitos dos titulares dos dados segundo o RGPD:** Na qualidade de titular dos dados, você tem diversos direitos segundo o RGPD, que decorrem, em especial, dos artigos 15 a 21 do RGPD:",
          },
          {
            kind: "list",
            items: [
              "**Direito de oposição:** Você tem o direito de se opor a qualquer momento, por motivos relacionados à sua situação particular, ao tratamento dos dados pessoais que lhe dizem respeito realizado com base no art. 6º, § 1º, alíneas “e” ou “f”, do RGPD; isso também se aplica à definição de perfis baseada nessas disposições. Quando os dados pessoais que lhe dizem respeito forem tratados para fins de publicidade direta, você tem o direito de se opor a qualquer momento ao tratamento dos dados pessoais que lhe dizem respeito para fins de publicidade desse tipo; isso também se aplica à definição de perfis na medida em que esteja relacionada com essa publicidade direta.",
              "**Direito de revogação de consentimentos:** Você tem o direito de revogar a qualquer momento os consentimentos concedidos.",
              "**Direito de acesso:** Você tem o direito de solicitar a confirmação de que dados a seu respeito estão sendo tratados e de obter acesso a esses dados, bem como informações adicionais e uma cópia dos dados, em conformidade com as exigências legais.",
              "**Direito de retificação:** Em conformidade com as exigências legais, você tem o direito de solicitar a complementação dos dados a seu respeito ou a retificação dos dados a seu respeito que estejam incorretos.",
              "**Direito de exclusão e de limitação do tratamento:** Em conformidade com as exigências legais, você tem o direito de solicitar que os dados a seu respeito sejam excluídos sem demora indevida ou, alternativamente, de solicitar a limitação do tratamento dos dados.",
              "**Direito à portabilidade dos dados:** Você tem o direito, em conformidade com as exigências legais, de receber os dados a seu respeito que nos forneceu em um formato estruturado, de uso corrente e legível por máquina, ou de solicitar a sua transmissão a outro controlador.",
              "**Reclamação a uma autoridade de controle:** Sem prejuízo de qualquer outro recurso administrativo ou judicial, você tem o direito de apresentar reclamação a uma autoridade de controle de proteção de dados se considerar que o tratamento dos seus dados pessoais viola o RGPD. A reclamação pode ser apresentada, em especial, a uma autoridade de controle no Estado-Membro da sua residência habitual, do seu local de trabalho ou do local da alegada violação.",
            ],
          },
        ],
      },
      {
        id: "hospedagem",
        title: "Disponibilização da oferta online e hospedagem na web",
        blocks: [
          {
            kind: "p",
            text: "Tratamos os dados dos usuários para poder disponibilizar-lhes os nossos serviços online. Para esse fim, tratamos o endereço IP do usuário, que é necessário para transmitir o conteúdo e as funções dos nossos serviços online ao navegador ou ao dispositivo do usuário.",
          },
          {
            kind: "list",
            items: [
              "**Tipos de dados tratados:** Dados de uso (por exemplo, visualizações de páginas e tempo de permanência, caminhos de cliques, intensidade e frequência de uso, tipos de dispositivos e sistemas operacionais utilizados, interações com conteúdos e funções); dados de metadados, de comunicação e de processo (por exemplo, endereços IP, indicações de horário, números de identificação, pessoas envolvidas); dados de registro (por exemplo, arquivos de log relativos a logins ou ao acesso a dados ou horários de acesso).",
              "**Titulares dos dados:** Usuários (por exemplo, visitantes do site, usuários de serviços online).",
              "**Finalidades do tratamento e interesses legítimos:** Disponibilização da nossa oferta online e facilidade de uso; infraestrutura de tecnologia da informação (operação e disponibilização de sistemas de informação e equipamentos técnicos (computadores, servidores etc.)); medidas de segurança.",
              "**Conservação e exclusão:** Exclusão em conformidade com as indicações da seção “Informações gerais sobre armazenamento e exclusão de dados”.",
              "**Bases legais:** Interesses legítimos (art. 6º, § 1º, frase 1, alínea “f”, do RGPD).",
            ],
          },
          {
            kind: "subheading",
            text: "Informações adicionais sobre processos de tratamento, procedimentos e serviços:",
          },
          {
            kind: "list",
            items: [
              "**Disponibilização da oferta online em espaço de armazenamento alugado:** Para a disponibilização da nossa oferta online, utilizamos espaço de armazenamento, capacidade de processamento e software que alugamos ou obtemos de outra forma de um provedor de servidores correspondente (também designado “provedor de hospedagem”); **bases legais:** interesses legítimos (art. 6º, § 1º, frase 1, alínea “f”, do RGPD).",
              "**Coleta de dados de acesso e arquivos de log:** O acesso à nossa oferta online é registrado na forma dos chamados “arquivos de log do servidor”. Os arquivos de log do servidor podem incluir o endereço e o nome das páginas e arquivos acessados, a data e a hora do acesso, os volumes de dados transmitidos, a mensagem sobre o acesso bem-sucedido, o tipo e a versão do navegador, o sistema operacional do usuário, a URL de referência (a página visitada anteriormente) e, em regra, os endereços IP e o provedor solicitante. Os arquivos de log do servidor podem ser utilizados, por um lado, para fins de segurança, por exemplo, para evitar a sobrecarga dos servidores (em especial no caso de ataques abusivos, os chamados ataques DDoS) e, por outro lado, para garantir a utilização e a estabilidade dos servidores; **bases legais:** interesses legítimos (art. 6º, § 1º, frase 1, alínea “f”, do RGPD). **Exclusão de dados:** As informações dos arquivos de log são armazenadas por no máximo 30 dias e depois excluídas ou anonimizadas. Os dados cuja conservação adicional seja necessária para fins probatórios ficam isentos de exclusão até o esclarecimento definitivo do respectivo incidente.",
            ],
          },
        ],
      },
      {
        id: "alteracoes",
        title: "Alteração e atualização",
        blocks: [
          {
            kind: "p",
            text: "Pedimos que você se informe regularmente sobre o conteúdo da nossa política de privacidade. Ajustamos a política de privacidade assim que as alterações nos tratamentos de dados por nós realizados o tornem necessário. Informaremos você assim que as alterações exigirem uma ação da sua parte (por exemplo, consentimento) ou qualquer outra notificação individual.",
          },
          {
            kind: "p",
            text: "Caso indiquemos nesta política de privacidade endereços e informações de contato de empresas e organizações, pedimos que observe que os endereços podem mudar com o tempo e que verifique as indicações antes de entrar em contato.",
          },
        ],
      },
      {
        id: "definicoes",
        title: "Definições de termos",
        blocks: [
          {
            kind: "p",
            text: "Nesta seção, você encontra uma visão geral dos termos utilizados nesta política de privacidade. Na medida em que os termos sejam legalmente definidos, prevalecem as suas definições legais. As explicações a seguir destinam-se, sobretudo, a facilitar a compreensão.",
          },
          {
            kind: "list",
            items: [
              "**Dados cadastrais:** Os dados cadastrais abrangem informações essenciais necessárias para a identificação e a gestão de parceiros contratuais, contas de usuário, perfis e atribuições semelhantes. Esses dados podem incluir, entre outros, informações pessoais e demográficas como nomes, informações de contato (endereços, números de telefone, endereços de e-mail), datas de nascimento e identificadores específicos (IDs de usuário). Os dados cadastrais constituem a base de qualquer interação formal entre pessoas e serviços, instituições ou sistemas, ao possibilitarem uma atribuição e comunicação inequívocas.",
              "**Dados de conteúdo:** Os dados de conteúdo abrangem informações geradas no decorrer da criação, edição e publicação de conteúdos de todos os tipos. Essa categoria de dados pode incluir textos, imagens, vídeos, arquivos de áudio e outros conteúdos multimídia publicados em diversas plataformas e mídias. Os dados de conteúdo não se limitam ao conteúdo propriamente dito, mas incluem também metadados que fornecem informações sobre o próprio conteúdo, como tags, descrições, informações sobre o autor e datas de publicação.",
              "**Dados de contato:** Os dados de contato são informações essenciais que possibilitam a comunicação com pessoas ou organizações. Incluem, entre outros, números de telefone, endereços postais e endereços de e-mail, bem como meios de comunicação como perfis em redes sociais e identificadores de mensagens instantâneas.",
              "**Dados de metadados, de comunicação e de processo:** Dados de metadados, de comunicação e de processo são categorias que contêm informações sobre a forma como os dados são tratados, transmitidos e administrados. Os metadados, também conhecidos como dados sobre dados, abrangem informações que descrevem o contexto, a origem e a estrutura de outros dados. Podem incluir indicações sobre o tamanho do arquivo, a data de criação, o autor de um documento e o histórico de alterações. Os dados de comunicação registram a troca de informações entre usuários por diversos canais, como tráfego de e-mail, registros de chamadas, mensagens em redes sociais e históricos de chat, incluindo as pessoas envolvidas, os carimbos de data e hora e os canais de transmissão. Os dados de processo descrevem os processos e fluxos de trabalho dentro de sistemas ou organizações, incluindo documentações de fluxo de trabalho, registros de transações e atividades, bem como registros de auditoria utilizados para rastrear e revisar operações.",
              "**Dados de uso:** Os dados de uso referem-se a informações que registram como os usuários interagem com produtos, serviços ou plataformas digitais. Esses dados abrangem uma ampla variedade de informações que mostram como os usuários utilizam aplicativos, quais funções preferem, quanto tempo permanecem em determinadas páginas e por quais caminhos navegam em um aplicativo. Os dados de uso também podem incluir a frequência de uso, carimbos de data e hora das atividades, endereços IP, informações do dispositivo e dados de localização. São especialmente valiosos para a análise do comportamento dos usuários, a otimização das experiências do usuário, a personalização de conteúdos e o aprimoramento de produtos ou serviços. Além disso, os dados de uso desempenham um papel decisivo na identificação de tendências, preferências e possíveis áreas problemáticas nas ofertas digitais.",
              "**Dados pessoais:** “Dados pessoais” são todas as informações relativas a uma pessoa natural identificada ou identificável (a seguir “titular dos dados”); considera-se identificável a pessoa natural que pode ser identificada, direta ou indiretamente, em especial mediante a atribuição a um identificador como um nome, um número de identificação, dados de localização, um identificador online (por exemplo, um cookie) ou a uma ou mais características específicas que expressem a identidade física, fisiológica, genética, psíquica, econômica, cultural ou social dessa pessoa natural.",
              "**Dados de registro:** Os dados de registro são informações sobre eventos ou atividades registrados em um sistema ou rede. Esses dados contêm tipicamente informações como carimbos de data e hora, endereços IP, ações do usuário, mensagens de erro e outros detalhes sobre o uso ou a operação de um sistema. Os dados de registro são frequentemente utilizados para analisar problemas do sistema, monitorar a segurança ou elaborar relatórios de desempenho.",
              "**Controlador:** Designa-se “controlador” a pessoa natural ou jurídica, autoridade pública, agência ou outro órgão que, sozinho ou em conjunto com outros, decide sobre as finalidades e os meios do tratamento de dados pessoais.",
              "**Tratamento:** “Tratamento” é qualquer operação ou conjunto de operações realizadas com dados pessoais, com ou sem auxílio de meios automatizados. O termo é amplo e abrange praticamente qualquer manuseio de dados, seja a coleta, a avaliação, o armazenamento, a transmissão ou a exclusão.",
            ],
          },
        ],
      },
    ],
  },
};
