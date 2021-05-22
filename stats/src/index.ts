import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
//import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
//import { HtmlReport } from "./reportTargets/HtmlReport";

// //Create an object that satifies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");
// //Create an instance of MatchReader and pass in something that satisfies
// //the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load(); // now matchReader.matches exists

//const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
