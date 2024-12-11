import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Principal "mo:base/Principal";
import List "mo:base/List";

module {
  public type Residence = {
    name: Text;
    apartmentsCount: Nat;
    builderIdentifier: Principal;
    expenses: List.List<Text>;
  };

  public type Apartment = {
    number: Nat;
    name: Text;
    ownerIdentifier: Principal;
  };

  public type CouncilRole = {
    #Chairman;
    #Treasurer;
    #Controller;
  };

  public type CouncilApplication = {
    apartmentNumber: Nat;
    councilRole: CouncilRole;
  };

  public type CouncilMember = {
    apartmentNumber: Nat;
    councilRole: CouncilRole;
  };
}
