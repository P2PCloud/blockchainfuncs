package evm_test

import (
	"testing"

	"github.com/p2pcloud/protocol"
	"github.com/stretchr/testify/require"
)

func TestAddOffer(t *testing.T) {
	testEnv := CreateTestEnv(t, 2)

	var err error

	err = testEnv.Users[0].AddOffer(protocol.Offer{
		VmTypeId:      3,
		PPS:           1,
		Availablility: 1,
	}, "https://hello.world")
	require.NoError(t, err)

	err = testEnv.Users[0].AddOffer(protocol.Offer{
		VmTypeId:      3,
		PPS:           1,
		Availablility: 1,
	}, "https://hello.world")
	require.NoError(t, err)

	offers, err := testEnv.Users[0].GetMyOffers()
	require.NoError(t, err)
	if len(offers) != 2 {
		t.Fatalf("expected 1 offer, got %d", len(offers))
	}
	if offers[0].VmTypeId != 3 {
		t.Fatalf("expected 3, got %d", offers[0].VmTypeId)
	}
	if offers[1].Index != 1 {
		t.Fatalf("expected 1, got %d", offers[1].Index)
	}

	offers, err = testEnv.Users[1].GetMyOffers()
	require.NoError(t, err)
	if len(offers) != 0 {
		t.Fatalf("expected 0 offer, got %d", len(offers))
	}
}

func TestRemoveOffer(t *testing.T) {
	testEnv := CreateTestEnv(t, 2)

	var err error

	contract1 := testEnv.Users[0]
	contract2 := testEnv.Users[1]

	//test add offer
	err = contract1.AddOffer(protocol.Offer{
		VmTypeId:      3,
		PPS:           1,
		Availablility: 1,
	}, "https://hello.world")
	require.NoError(t, err)

	offers, err := contract1.GetMyOffers()
	require.NoError(t, err)
	require.Len(t, offers, 1)

	contract1.RemoveOffer(offers[0].Index)

	offers, err = contract2.GetMyOffers()
	require.NoError(t, err)
	require.Len(t, offers, 0)
}

func TestUrlUpdate(t *testing.T) {
	testEnv := CreateTestEnv(t, 1)

	var err error

	contract := testEnv.Users[0]

	//test add offer
	err = contract.AddOffer(protocol.Offer{
		VmTypeId:      3,
		PPS:           1,
		Availablility: 1,
	}, "https://hello.1")
	require.NoError(t, err)

	url, err := contract.GetMinerUrl(contract.GetMyAddress())
	require.NoError(t, err)

	require.Equal(t, "https://hello.1", url)

	//update manually
	err = contract.SetMinerUrlIfNeeded("https://hello.2")
	require.NoError(t, err)

	url, err = contract.GetMinerUrl(contract.GetMyAddress())
	require.NoError(t, err)

	require.Equal(t, "https://hello.2", url)
}

func TestUpdateOffer(t *testing.T) {
	testEnv := CreateTestEnv(t, 2)

	var err error

	contract1 := testEnv.Users[0]

	//test add offer
	err = contract1.AddOffer(protocol.Offer{
		VmTypeId:      3,
		PPS:           12,
		Availablility: 1,
	}, "https://hello.world")
	require.NoError(t, err)

	offers, err := contract1.GetMyOffers()
	require.NoError(t, err)
	require.Len(t, offers, 1)

	offerUpdate := offers[0]
	offerUpdate.Availablility = 999999
	offerUpdate.PPS = 400
	offerUpdate.VmTypeId = 777

	err = contract1.UpdateOffer(offerUpdate)
	require.NoError(t, err)

	updatedOffers, err := contract1.GetMyOffers()
	require.NoError(t, err)
	require.Len(t, offers, 1)

	require.Equal(t, updatedOffers[0].VmTypeId, 3)           //still the same
	require.Equal(t, updatedOffers[0].PPS, 400)              //updated
	require.Equal(t, updatedOffers[0].Availablility, 999999) //updated
}

func TestAvailableOffers(t *testing.T) {
	testEnv := CreateTestEnv(t, 3)

	var err error

	miner1 := testEnv.Users[0]
	miner2 := testEnv.Users[0]
	user := testEnv.Users[0]

	const OUR_TYPE = 0
	const OTHER_TYPE = 777

	//0 avalability
	err = miner1.AddOffer(protocol.Offer{
		VmTypeId:      OUR_TYPE,
		PPS:           12,
		Availablility: 0,
	}, "https://hello.world")
	require.NoError(t, err)

	//wrong type
	err = miner1.AddOffer(protocol.Offer{
		VmTypeId:      OTHER_TYPE,
		PPS:           12,
		Availablility: 1,
	}, "https://hello.world")
	require.NoError(t, err)

	//all good
	err = miner1.AddOffer(protocol.Offer{
		VmTypeId:      OUR_TYPE,
		PPS:           11,
		Availablility: 11,
	}, "https://hello.world")
	require.NoError(t, err)

	err = miner2.AddOffer(protocol.Offer{
		VmTypeId:      OUR_TYPE,
		PPS:           22,
		Availablility: 22,
	}, "https://hello.world")
	require.NoError(t, err)

	offers, err := user.GetAvailableOffers(OUR_TYPE)
	require.NoError(t, err)
	require.Len(t, offers, 2)

	require.Equal(t, offers[0].VmTypeId, OUR_TYPE)
	require.Equal(t, offers[0].PPS, 11)
	require.Equal(t, offers[0].Availablility, 11)

	require.Equal(t, offers[1].VmTypeId, OUR_TYPE)
	require.Equal(t, offers[1].PPS, 22)
	require.Equal(t, offers[1].Availablility, 22)
}

//TODO: test offer availability becomes lower with vm booking
