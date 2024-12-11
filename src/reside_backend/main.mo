import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import List "mo:base/List";
import Types "Types";

actor {
  var residence: Types.Residence = {
    name = "";
    apartmentsCount = 0;
    builderIdentifier = Principal.fromText("aaaaa-aa");
    expenses = List.nil<Text>();
  };
  var councilApplications: List.List<Types.CouncilApplication> = List.nil<Types.CouncilApplication>();
  var apartments: List.List<Types.Apartment> = List.nil<Types.Apartment>();

  public func setupResidence(name: Text, apartmentsCount: Nat, builderIdentifier: Principal, expenses: List.List<Text>) : async () {
    residence := {
      name = name;
      apartmentsCount = apartmentsCount;
      builderIdentifier = builderIdentifier;
      expenses = expenses;
    };
  };

  public func getResidence() : async Types.Residence {
    return residence;
  };

  public func addApartment(apartmentNumber: Nat, apartmentName: Text, ownerIdentifier: Principal) : async () {
    if (apartmentNumber > residence.apartmentsCount) {
      return;
    };

    let newApartment: Types.Apartment = {
      number = apartmentNumber;
      name = apartmentName;
      ownerIdentifier = ownerIdentifier;
    };

    apartments := List.push(newApartment, apartments);

    residence := {
      name = residence.name;
      apartmentsCount = residence.apartmentsCount + 1;
      builderIdentifier = residence.builderIdentifier;
      expenses = residence.expenses;
    };
  };

  public func getApartments() : async List.List<Types.Apartment> {
    return apartments;
  };

  public func applyForCouncil(apartmentNumber: Nat, councilRole: Types.CouncilRole) : async () {
    if (apartmentNumber > residence.apartmentsCount) {
      return;
    };

    let councilApplication: Types.CouncilApplication = {
      apartmentNumber = apartmentNumber;
      councilRole = councilRole;
    };

    councilApplications := List.push(councilApplication, councilApplications);
  };

  public func getCouncilApplications() : async List.List<Types.CouncilApplication> {
    return councilApplications;
  };
};